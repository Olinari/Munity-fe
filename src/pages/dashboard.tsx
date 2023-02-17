import Page from '@/components/page';
import { GroupActivitySummary } from '@/containers/dashboard/group-summary';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getGroupData } from '@/services/whatsapp';
import { Loader } from '@/components/loader';
import styled from 'styled-components';
import { AxisOptions, Chart } from 'react-charts';
import React, { useMemo } from 'react';

export interface GroupChat {
  _id: string;
  name: string;
  __v: number;
  adminProfilePic: string;
  messagesDisterbution: number[];
  ownerPhone: string;
  ownerSerialized: string;
  participants: Participant[];
  subject: string;
  messages: number;
  topContributorIndex: number;
}

interface Participant {
  phone: string;
  isAdmin: boolean;
  messages: number;
  profilePicUrl: string;
  _id: string;
}

export default () => {
  const { key } = useParams();
  const { data: group, isLoading: isGroupLoading } = useQuery(
    'group',
    async () => await getGroupData(key),
    { refetchInterval: 10000 }
  );

  return (
    <Page>
      {isGroupLoading ? (
        <Loader />
      ) : (
        <DashboardContainer>
          <GroupActivitySummary groupData={group} />
          <GroupDataContent data={group?.messagesDisterbution} />
        </DashboardContainer>
      )}
    </Page>
  );
};

const Line = styled(({ data, ...props }) => {
  const primaryAxis = useMemo<AxisOptions<(typeof data)[number]['data'][number]>>(
    () => ({
      getValue: datum => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<(typeof data)[number]['data'][number]>[]>(
    () => [
      {
        getValue: datum => datum.secondary,
        elementType: 'bar',
      },
    ],
    []
  );

  return (
    <div {...props}>
      <Chart
        options={{
          data: [{ label: 'shit', data }],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
})`
  height: 500px;
  width: 500px;

  text {
    fill: white !important;
  }

  line {
    fill: white !important;
    stroke: #ffffff11;
  }
`;

const GroupDataContent = ({ data: messageByHour }) => {
  const data = messageByHour.map((messages, hour) => ({
    primary: `${String(hour).padStart(2, '0')}:00`,
    secondary: messages,
  }));

  return <Line data={data}></Line>;
};

const DashboardContainer = styled.section`
  --topbar-height: 80px;
  height: calc(100% - var(--topbar-height));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'header'
    'main';
`;

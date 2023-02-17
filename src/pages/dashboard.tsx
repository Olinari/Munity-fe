import Page from '@/components/page';
import { GroupActivitySummary } from '@/containers/dashboard/group-summary';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getGroupData } from '@/services/whatsapp';
import { Loader } from '@/components/loader';
import styled from 'styled-components';
import React from 'react';
import { GroupActivityContent } from '@/containers/dashboard/group-activity';

export interface GroupChat {
  _id: string;
  name: string;
  __v: number;
  adminProfilePic: string;
  messagesDistribution: number[];
  ownerPhone: string;
  ownerSerialized: string;
  participants: Participant[];
  subject: string;
  messages: number;
  topContributorIndex: number;
  vendor?: string;
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
  if (key) {
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
            <GroupActivityContent groupData={group} />
          </DashboardContainer>
        )}
      </Page>
    );
  }
};

const DashboardContainer = styled.section`
  --topbar-height: 80px;
  height: calc(100% - var(--topbar-height));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    'header'
    'main';
`;

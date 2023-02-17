import { Heading } from '@/components/typography';
import { Tab, TabList, TabPanel, Tabs } from '@/components/layout/tabs';
import React from 'react';
import { ActivityChart } from '@/components/graphs/ActivityChart';
import { GroupChat } from '@/pages/dashboard';
import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DailyActivity } from '@/containers/dashboard/daily-activity';

export const GroupActivityContent = ({ groupData }: { groupData: GroupChat }) => (
  <Container>
    <Heading>Group Activity</Heading>
    <Tabs>
      <TabList>
        <Tab>All Time</Tab>
        <Tab>Daily</Tab>
      </TabList>
      <TabPanel>
        <ActivityChart data={groupData?.messagesDistribution} title={'Message Frequency'} />
      </TabPanel>
      <TabPanel>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DailyActivity groupId={groupData?._id} />
        </LocalizationProvider>
      </TabPanel>
    </Tabs>
  </Container>
);

const Container = styled.div`
  > ${Heading} {
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

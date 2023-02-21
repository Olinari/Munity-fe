import { Heading } from '@/components/typography';
import { Tab, TabList, TabPanel, Tabs } from '@/components/layout/tabs';
import React from 'react';
import { HourDistributionChart } from '@/components/graphs/hour-distribution-chart';
import { GroupChat } from '@/pages/dashboard';
import styled from 'styled-components';
import { DailyActivity } from '@/containers/dashboard/daily-activity';
import { WeeklyActivity } from '@/containers/dashboard/weekly-actvity';

export const GroupActivityContent = ({ groupData }: { groupData: GroupChat }) => (
  <Container>
    <Heading>Group Activity</Heading>
    <Tabs>
      <TabList>
        <Tab>All Time</Tab>
        <Tab>Daily</Tab>
        <Tab>Weekly</Tab>
      </TabList>
      <TabPanel>
        <HourDistributionChart data={groupData?.messagesDistribution} title={'Message Frequency'} />
      </TabPanel>
      <TabPanel>
        <DailyActivity groupId={groupData?._id} />
      </TabPanel>
      <TabPanel>
        <WeeklyActivity groupId={groupData?._id} />
      </TabPanel>
    </Tabs>
  </Container>
);

const Container = styled.div`
  > ${Heading} {
    margin-top: 4px;
    font-size: 28px;
    font-weight: 600;
  }
`;

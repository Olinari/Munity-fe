import styled from 'styled-components';
import { Paragraph, Title } from '@/components/typography';
import { Avatar } from '@/components/avatars/avatar';
import { FlexLayout } from '@/components/layout/flex-layout';
import { getHourOfDay } from '@/utils/time-utils';
import { indexOfMaxValue } from '@/utils/array-utils';
import { GroupChat } from '@/pages/dashboard';
import Icon from '@/components/icons/icon';

export const GroupActivitySummary = ({ groupData }: { groupData: GroupChat }) => {
  const peakHours = groupData?.messagesDistribution
    ? getHourOfDay(indexOfMaxValue(groupData.messagesDistribution))
    : null;

  return (
    <GroupActivitySummary.Container>
      <ActivityBox>
        <Title>Community</Title>
        <FlexLayout gap={5} align={'center'}>
          <Icon name={groupData?.vendor ?? 'Whatsapp'} />
          <Paragraph>{groupData?.subject}</Paragraph>
        </FlexLayout>
      </ActivityBox>
      <ActivityBox>
        <Title>Total messages sent</Title> <Paragraph>{groupData?.messages}</Paragraph>
      </ActivityBox>
      <ActivityBox>
        <Title> Active participants</Title> <Paragraph>{groupData?.participants?.length}</Paragraph>
      </ActivityBox>
      {peakHours && (
        <ActivityBox>
          <Title> Peak activity times </Title> <Paragraph> {peakHours} </Paragraph>
        </ActivityBox>
      )}
      <ActivityBox>
        <Title> Top Contributer</Title>
        <FlexLayout gap={8}>
          <Avatar
            size={28}
            avatarUrl={groupData?.participants?.[groupData.topContributorIndex]?.profilePicUrl}
          />
        </FlexLayout>
      </ActivityBox>
      <ActivityBox>
        <Title> Admin</Title>
        <FlexLayout gap={8}>
          <Avatar size={28} avatarUrl={groupData.adminProfilePic} />
        </FlexLayout>
      </ActivityBox>
    </GroupActivitySummary.Container>
  );
};

GroupActivitySummary.Container = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 12px;
  border-top: 1px solid #ffffff1c;
  border-bottom: 1px solid #ffffff1c;
  height: 96px;
  padding: 16px;
`;

const ActivityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  position: relative;

  &:hover:after {
    content: '';
    background-color: #ffffff1c;
    width: calc(100% + 32px);
    height: 96px;
    position: absolute;
    top: -16px;
    left: -16px;
  }

  ${Title} {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;

    color: var(--color-gray-1);
    white-space: nowrap;
  }

  ${Paragraph} {
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
  }
`;

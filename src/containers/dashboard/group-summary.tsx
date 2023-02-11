import styled from "styled-components";
import { useQuery } from "react-query";
import { getGroupData } from "@/services/whatsapp";
import { Paragraph, Title } from "@/components/typography";
import { Avatar } from "@/components/avatars/avatar";
import { FlexBox } from "@/components/layout";
import { getHourOfDay } from "@/utils/time-utils";
import { indexOfMaxValue } from "@/utils/array-utils";

export const GroupActivitySummary = ({ groupId }: { groupId: string }) => {
  const { data: group, isLoading: isGroupLoading } = useQuery(
    "group",
    async () => await getGroupData(groupId)
  );

  const peakHours = group?.messagesDisterbution
    ? getHourOfDay(indexOfMaxValue(group.messagesDisterbution))
    : null;

  console.log(group);

  return (
    <>
      {isGroupLoading ? (
        "Loading Group"
      ) : (
        <>
          <GroupActivitySummary.Container>
            <ActivityBox>
              <Title>Community</Title> <Paragraph>{group.subject}</Paragraph>
            </ActivityBox>
            <ActivityBox>
              <Title>Total messages sent</Title>{" "}
              <Paragraph>{group.messages}</Paragraph>
            </ActivityBox>
            <ActivityBox>
              <Title> Active participants</Title>{" "}
              <Paragraph>{group.participants?.length}</Paragraph>
            </ActivityBox>
            {peakHours && (
              <ActivityBox>
                <Title> Peak activity times </Title>{" "}
                <Paragraph> {peakHours} </Paragraph>
              </ActivityBox>
            )}
            <ActivityBox>
              <Title> Top Contributer</Title>
              <FlexBox gap={8}>
                <Avatar
                  size={32}
                  avatarUrl={
                    group.participants?.[group.topContributorIndex]
                      ?.profilePicUrl
                  }
                />
              </FlexBox>
            </ActivityBox>
            <ActivityBox>
              <Title> Admin</Title>
              <FlexBox gap={8}>
                <Avatar size={32} avatarUrl={group.adminProfilePic} />
              </FlexBox>
            </ActivityBox>
          </GroupActivitySummary.Container>
        </>
      )}
    </>
  );
};

GroupActivitySummary.Container = styled.div`
  display: flex;
  gap: 50px;
`;

const ActivityBox = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--color-gray-1);
    white-space: nowrap;
  }

  ${Paragraph} {
    font-size: 30px;
    white-space: nowrap;
  }
`;

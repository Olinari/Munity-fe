import Page from "@/components/page";
import { useQueryParams } from "@/hooks/use-query-params";
import { GroupActivitySummary } from "@/containers/dashboard/group-summary";

export default () => {
  const {
    queryParams: { groupId },
  } = useQueryParams();

  return <Page>{groupId && <GroupActivitySummary groupId={groupId} />}</Page>;
};

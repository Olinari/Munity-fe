import Page from '@/components/page';
import { useQuery } from 'react-query';
import { getGroupsData } from '@/services/whatsapp';
import { NavLink } from 'react-router-dom';
import { GroupChat } from '@/pages/dashboard';

export default () => {
  const { data: groups, isLoading: isGroupsLoading } = useQuery(
    'group',
    async () => await getGroupsData()
  );
  console.log(groups);
  return (
    <Page>
      {isGroupsLoading
        ? 'Loading Groups'
        : groups.map?.((group: GroupChat) => <Group {...group}></Group>)}
    </Page>
  );
};

const Group = ({ _id, subject }: { _id: string; subject: string }) => (
  <div>
    <NavLink to={`/${_id}`}>{subject}</NavLink>
  </div>
);

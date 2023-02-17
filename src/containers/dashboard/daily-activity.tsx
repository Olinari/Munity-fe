import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getDailyGroupData } from '@/services/whatsapp';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { ActivityChart } from '@/components/graphs/ActivityChart';
import { Loader } from '@/components/loader';

export const DailyActivity = ({ groupId }: { groupId: string }) => {
  const [day, setDay] = useState(new Date());

  const { data: dailyData, isLoading: isLoading } = useQuery(
    ['groupDay', day],
    async () => await getDailyGroupData(groupId, day),
    {
      refetchInterval: 10000,
    }
  );
  const queryClient = useQueryClient();

  useEffect(() => {}, [day]);

  return (
    <>
      <DatePicker
        label="Choose Date"
        maxDate={new Date()}
        value={day}
        onChange={newValue => {
          newValue && setDay(newValue);
          queryClient.invalidateQueries({ queryKey: ['groupDay'] });
        }}
        renderInput={params => <TextField {...params} />}
      />

      {!isLoading && !dailyData?.messagesDistribution ? (
        <div>No Data Available</div>
      ) : !isLoading && dailyData?.messagesDistribution ? (
        <ActivityChart data={dailyData?.messagesDistribution} title={'Message Frequency'} />
      ) : (
        <Loader />
      )}
    </>
  );
};

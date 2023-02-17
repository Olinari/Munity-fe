import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDailyGroupData } from '@/services/whatsapp';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { ActivityChart } from '@/components/graphs/ActivityChart';

export const DailyActivity = ({ key }: { key: string }) => {
  const [day, setDay] = useState(new Date());

  const { data: dailyData, isLoading: isLoading } = useQuery(
    'groupDay',
    async () => await getDailyGroupData(key, day),
    { refetchInterval: 10000 }
  );

  return !isLoading ? (
    <>
      <DatePicker
        label="Choose Date"
        maxDate={new Date()}
        value={day}
        onChange={newValue => {
          newValue && setDay(newValue);
        }}
        renderInput={params => <TextField {...params} />}
      />
      <ActivityChart data={dailyData?.messagesDistribution} title={'Message Frequency'} />;
    </>
  ) : (
    <></>
  );
};

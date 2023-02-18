import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDailyGroupData } from '@/services/whatsapp';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { HourDistributionChart } from '@/components/graphs/hour-distribution-chart';
import { Loader } from '@/components/loader';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export const DailyActivity = ({ groupId }: { groupId: string }) => {
  const [day, setDay] = useState(new Date());

  const { data: dailyData, isLoading: isLoading } = useQuery(
    ['groupDay', day],
    async () => await getDailyGroupData(groupId, day),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Choose Date"
        maxDate={new Date()}
        value={day}
        onChange={newValue => {
          newValue && setDay(newValue);
        }}
        renderInput={params => <TextField {...params} />}
      />
      {!isLoading && !dailyData?.messagesDistribution ? (
        <div>No Data Available</div>
      ) : !isLoading && dailyData?.messagesDistribution ? (
        <HourDistributionChart data={dailyData?.messagesDistribution} title={'Message Frequency'} />
      ) : (
        <Loader />
      )}
    </LocalizationProvider>
  );
};

// @ts-nocheck
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { getWeeklyGroupData } from '@/services/whatsapp';
import { Loader } from '@/components/loader';
import { DailyDistributionChart } from '@/components/graphs/daily-distribution-chart';

export const WeeklyActivity = ({ groupId }: { groupId: string }) => {
  const [week, setWeek] = useState<Moment | null>(moment(new Date()));

  const { data: weeklyData, isLoading: isLoading } = useQuery(
    ['groupDay', week],
    async () => await getWeeklyGroupData(groupId, new Date(week)),
    {
      refetchInterval: 10000,
    }
  );

  const renderWeekPickerDay = (
    date: Moment,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => {
    if (!week) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = week.startOf('week');
    const end = week.endOf('week');
    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (
      <PickersWeeek
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Week picker"
          value={week}
          onChange={newValue => {
            setWeek(newValue);
          }}
          renderDay={renderWeekPickerDay}
          renderInput={params => <TextField {...params} />}
          inputFormat="[Week] w, MMM YYYY "
        />
      </LocalizationProvider>
      {!isLoading && !weeklyData ? (
        <div>No Data Available</div>
      ) : !isLoading && weeklyData ? (
        <DailyDistributionChart data={weeklyData} title={'Daily Frequency'} />
      ) : (
        <Loader />
      )}
    </>
  );
};

const PickersWeeek = styled(PickersDay)`
  background: var(--color-dark-blue) !important;

  button {
    z-index: 1000000 !important;
  }

  &.Mui-selected {
    background: var(--color-dark-blue) !important;
    color: white !important;
  }

  &.Mui-selected:after,
  &:hover:after {
    pointer-events: none;
    content: '';
    background: #ffffff0c !important;
    width: 10000%;
    height: 100%;
    z-index: 100000000;
    left: -1000%;
    position: absolute;
    border: 1px solid #ffffff0c;
  }

  &:hover,
  &:focus {
    background: var(--color-dark-blue) !important;
  }
`;

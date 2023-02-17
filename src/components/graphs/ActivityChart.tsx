import styled from 'styled-components';
import React, { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import { Heading } from '@/components/typography';
import { getHourOfDay } from '@/utils/time-utils';

export const ActivityChart = styled(({ data, type = 'bar', label = '', title, ...props }) => {
  const chartData = data
    ? data.map((messages: number, hour: number) => ({
        primary: getHourOfDay(hour),
        secondary: messages,
      }))
    : [];

  const primaryAxis = useMemo<AxisOptions<(typeof data)[number]['data'][number]>>(
    () => ({
      getValue: datum => datum.primary as unknown as Date,
    }),
    [data]
  );

  const secondaryAxes = useMemo<AxisOptions<(typeof data)[number]['data'][number]>[]>(
    () => [
      {
        getValue: datum => datum.secondary,
        elementType: type,
      },
    ],
    [data]
  );

  return (
    <div {...props}>
      <Heading>{title}</Heading>
      <Chart
        options={{
          data: [{ label, data: chartData }],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
})`
  height: 400px;
  width: 650px;

  ${Heading} {
    font-weight: 300;
    padding: 8px 12px;
  }

  text {
    fill: white !important;
  }

  line {
    fill: white !important;
    stroke: #ffffff11;
  }
`;

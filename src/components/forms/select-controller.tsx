import { Controller, FieldValue } from 'react-hook-form';
import Select from 'react-select';
import React from 'react';

export const SelectController = ({
  control,
  name,
  required = false,
  data,
  rules,
}: {
  control: FieldValue<any>;
  name: string;
  required: boolean;
  rules?: any;
  data: string[];
}) => (
  <Controller
    control={control}
    name={name}
    rules={{
      required: required && {
        message: 'Item type is required.',
        ...rules,
      },
    }}
    render={({ field: { onChange } }) => <Select isMulti options={data} onChange={onChange} />}
  />
);

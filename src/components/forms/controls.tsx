import { Controller, FieldValue } from 'react-hook-form';
import Select from 'react-select';
import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

export const SelectControl = ({
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

export const InputControl = styled(
  ({
    control,
    name,
    required = false,
    label = '',
    rules,
    ...props
  }: {
    control: FieldValue<any>;
    name: string;
    required: boolean;
    label: string;
    rules?: any;
  }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={{
          required: required && {
            message: 'Item type is required.',
            ...rules,
          },
        }}
        render={({ field: { onChange } }) => (
          <TextField
            onChange={onChange}
            id="standard-basic"
            required={required}
            label={label}
            variant="standard"
            {...props}
          />
        )}
      />
    );
  }
)``;

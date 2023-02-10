import { Controller } from "react-hook-form";
import Select from "react-select";
import React from "react";

export const SelectController = ({ control, name, required, data }) => (
  <Controller
    control={control}
    name={name}
    rules={{
      required: required && {
        message: "Item type is required.",
      },
    }}
    render={({ field: { onChange } }) => (
      <Select isMulti options={data} onChange={onChange} />
    )}
  />
);

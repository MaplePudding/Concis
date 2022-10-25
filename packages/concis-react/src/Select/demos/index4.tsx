import React from 'react';
import { Select } from 'concis';
/**
 * transform: true
 */
export default function SelectDemo1() {
  const option = [
    {
      label: 'Lucy',
      value: 'lucy',
      disabled: true,
    },
    {
      label: 'Mike',
      value: 'mike',
      disabled: true,
    },
    {
      label: 'Jack',
      value: 'jack',
    },
  ];
  const handleSelectCallback = (v: number) => {
    console.log(v);
  };
  return (
    <Select
      option={option}
      width={100}
      handleSelectCallback={handleSelectCallback}
      placeholder="请选择"
    />
  );
}

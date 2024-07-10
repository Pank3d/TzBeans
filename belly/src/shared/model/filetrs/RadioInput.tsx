import { Select } from '@mantine/core';
import { RadioInputInter } from '../../interface/interface';
import useUrlSearchParams from './useUrlSearchParams';
import { useEffect, useState } from 'react';
import { encodeSpaces } from './helpers';

export const RadioInput = ({ data, placeholder, searchKey }: RadioInputInter) => {
  const { updateParam, deleteParam, searchParams } = useUrlSearchParams()
  const [value, setValue] = useState<string | undefined>("");


  useEffect(() => {
    if (!value && value === '') {
      deleteParam(searchKey)
    }

    if(searchParams.size === 0){
      setValue("")
    }
  }, [value,searchParams])


  return (
    <Select
      searchValue={value}
      onChange={(value) => { updateParam(searchKey, encodeSpaces(value ?? '')); setValue(value ?? ""); }}
      data={data}
      placeholder={placeholder}
      clearable
      nothingFoundMessage="Nothing found..."

    />
  );
}
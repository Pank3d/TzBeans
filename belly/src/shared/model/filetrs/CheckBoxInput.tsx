import { useEffect, useState } from 'react';
import { Checkbox } from '@mantine/core';
import useUrlSearchParams from './useUrlSearchParams';
import { checkBoxInputInter } from '../../interface/interface';
import style from '../../../shared/styles/beans.module.scss'


export const CheckBoxInput = ({ paramKey }: checkBoxInputInter) => {
  const [checked, setChecked] = useState(false);
  const { updateParam, searchParams } = useUrlSearchParams()


  useEffect(() => {
    if(searchParams.size === 0){
      setChecked(false)
    }
  }, [searchParams])

  return (
    <div className={style.checkboxWrapper}>
      <p>{paramKey}</p>
      <Checkbox
        checked={checked}
        onChange={(event) => { setChecked(event.currentTarget.checked); updateParam(paramKey, event.currentTarget.checked); }}
      />
    </div>
  );
}
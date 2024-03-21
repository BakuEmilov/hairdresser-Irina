import React, { FC } from 'react';
import { Input } from '@/components/ui/input';

interface IProps {
  item: any,
  type: string
}

const InputComp:FC<IProps> = ({item, type}) => {
  return (
    <div className='my-6'>
      <Input type={type} placeholder={item} />
    </div>
  )
}

export default InputComp;

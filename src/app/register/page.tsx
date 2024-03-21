'use client'

import React from 'react';
import InputComp from '../components/inputComp/InputComp';
import ButtonComp from '../components/buttonComp/ButtonComp';
import { Button } from '@/components/ui/button';

const Register = () => {
  return (
    <div className='w-2/3 mt-20 m-auto'>
      <h2 className='text-center text-xl'>Пароль</h2>
      <form>
        <InputComp item={"Пароль"} type='password'/>
        <ButtonComp button='Пройти к записи' nameLink='Другой способ регистрации'/>
      </form>
    </div>
  )
};

export default Register;

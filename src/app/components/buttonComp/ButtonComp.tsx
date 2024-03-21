import React, { FC } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

interface IProps {
  button: string,
  nameLink: string
}

const ButtonComp:FC<IProps> = ({button, nameLink}) => {
  const router = useRouter();

  const goToAnotherLogin = () => {
    router.push('/register/another')
  }

  return (
    <div className='text-center text-primary'>
      <Button variant="outline">{button}</Button>
      <Button className='border-0 mt-5 font-light p-0 text-base' onClick={goToAnotherLogin} variant="outline">{nameLink}</Button> 
    </div>
  )
}

export default ButtonComp

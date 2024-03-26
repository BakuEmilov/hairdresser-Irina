"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-[400px]'>
        <CardHeader className="text-center">
          <CardTitle>Пароль</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input placeholder='Пароль' id='password'/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className='grid place-content-center w-full gap-5'>
            <Button>Пройти к записи</Button>
            <Link href={"/register/anotherWay"}>
              <Button>Пройти к записи другим способом</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register;
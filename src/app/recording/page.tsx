"use client"

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react'

const Recording = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-[400px] text-center'>
        <CardHeader>
          <CardTitle>Запись</CardTitle>
          <h2>Сегодня, 26 марта, 11:00-12:00</h2>
        </CardHeader>
        <CardContent>
          <form>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            <div className='my-4'>
              <Input placeholder='Имя' id='text'/>
            </div>
            <div>
              <Input placeholder='Номер телефона' id='text'/>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className='grid place-content-center w-full mt-[40px]'>
            <Button className='bg-green-500 text-white'>Записаться</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Recording;

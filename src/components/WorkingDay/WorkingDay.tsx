import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

interface IProps {
  time: string, 
  link: string,
  id: number
}

const WorkingDay = () => {
  const day:IProps[] = [
    {
      id: 1, 
      time: "9:00 - 10-00", 
      link: "Записаться",
    },
    {
      id: 2, 
      time: "10:00 - 11-00",
      link: "Записаться",
    },
    {
      id: 6, 
      time: "11:00 - 12-00",
      link: "Занято",
    },
    {
      id: 5, 
      time: "13:00 - 14-00",
      link: "Записаться",
    },
    {
      id: 4, 
      time: "15:00 - 16-00",
      link: "Записаться",
    },
  ]

  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-[400px]'>
        <CardHeader className='text-center'>
          <CardTitle>График рабочего дня</CardTitle>
          <h2>Сегодня 26 марта</h2>
        </CardHeader>
        <CardContent>
          <form>
            <div>
              {day.map((item: IProps) => (
                <div>
                  <div className='flex items-center justify-between my-5'>
                    <p>{item.time}</p>
                    <Link href={""}>
                    <Button className={item.link === "Занято" ? "bg-red-500 text-white" : "bg-green-500 text-white"} variant="outline">{item.link}</Button>
                    </Link>
                  </div>
                  <div className='w-full h-[1px] bg-black'/>
                </div>
              ))}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default WorkingDay;

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const AnotherWay = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-[400px]'>
        <CardHeader>
          <h2 className='text-center text-xl'>Другой способ логина</h2>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex items-center justify-between pt-5">
              <Link href="">
                <Button className='bg-red-500'>+996777776164</Button>
              </Link>
              <Link href="">
                <Button>Получить смс</Button>
              </Link>
            </div>
            <div className='w-full text-center'>
              <h2 className='my-4'>ИЛИ</h2>
              <Link href={""}>
                <Button className='bg-sky-500'>Log in with Telegram</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnotherWay

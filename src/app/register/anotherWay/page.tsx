import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Send , Mail, Phone} from 'lucide-react';
import Link from 'next/link'

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
                <Button className='bg-red-500'><span><Phone className='mr-2'/></span>+996777776164</Button>
              </Link>
              <Link href="">
                <Button><span><Mail className='mr-2'/></span>Получить смс</Button>
              </Link>
            </div>
            <div className='w-full text-center'>
              <h2 className='my-4'>ИЛИ</h2>
              <Link href={""}>
                <Button className='bg-sky-500 text-[15px]'><span> <Send className='mr-4'/> </span>Log in with Telegram</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnotherWay;

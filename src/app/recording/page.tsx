'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import passwordless from '@passwordless-id/connect'
import { client } from '@passwordless-id/webauthn'

const scope = 'openid avatar email'

const challenge = 'a7c61ef9-dc23-4806-b486-2428938a547e'

const Recording = () => {
  // const x = await client.isLocalAuthenticator()
  // console.log(x)

  async function onClickSignIn() {
    const registration = await client.register('Arnaud', challenge)
    console.log(registration)
  }

  return (
    <div className="flex items-center justify-center h-screen lg:mt-[60px]">
      <Card className="w-[400px] text-center">
        <CardHeader>
          <CardTitle>Запись</CardTitle>
          <h2>Сегодня, 26 марта, 11:00-12:00</h2>
        </CardHeader>
        <CardContent>
          <form>
            <div className="my-4">
              <Input placeholder="Имя" id="text" />
            </div>
            <div>
              <Input placeholder="Номер телефона" id="text" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full mt-[40px]">
            <Link href={'/workDay'}>
              <Button className="bg-red-500 text-white hover:shadow-gray-700">
                Назад
              </Button>
            </Link>
            <Button className="bg-green-500 text-white" onClick={onClickSignIn}>
              Записаться
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Recording

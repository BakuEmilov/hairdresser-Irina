import About from './components/About'
import AnotherEntry from './components/AnotherEntry'
import HeaderClient from './components/HeaderClient'
import WorkingDayCarousel from './components/WorkingDayCarousel'

import { SessionProvider } from 'next-auth/react'
import { cookies } from 'next/headers'
import { createClient } from '~/utils/supabase/server'

const x: string = 15;

const Home = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: masters } = await supabase.from('clients').select()
  console.log('Masters: ', masters)
  return (
    <SessionProvider>
      <HeaderClient />
      <About />
      <h1 className="text-center text-3xl font-bold mt-20">Запись на прием</h1>
      <WorkingDayCarousel />
      <AnotherEntry />
    </SessionProvider>
  )
}

export default Home

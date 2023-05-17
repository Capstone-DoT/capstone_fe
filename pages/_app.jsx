import '@/styles/globals.css'
import Nav_mob from "@/components/Nav_mob"
import Nav_pc from '@/components/Nav_pc'
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Nav_pc></Nav_pc>
      <Header></Header>
      {
        router.pathname.includes("content") ?
          <div className="relative left-[20%] pt-16 px-2 w-[80%] z-0"><Component {...pageProps} /></div>
          : <div className="relative left-[27%] pt-16 px-2 w-[60%] z-0"><Component {...pageProps} /></div>
      }
      <div className='h-20'></div>
    </>
  )
}

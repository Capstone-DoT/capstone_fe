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
        <Component {...pageProps} />
      : <div className="relative left-[330px] pt-16 px-2 w-[900px] z-0"><Component {...pageProps} /></div>
      }
      <div className='h-20'></div>
    </>
  )
}

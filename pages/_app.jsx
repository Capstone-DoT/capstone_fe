import '@/styles/globals.css'
import Nav_mob from "@/components/Nav_mob"
import Nav_pc from '@/components/Nav_pc'
import Aside from '@/components/Aside'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav_pc></Nav_pc>
      <Header></Header>
      <Component {...pageProps} />
      <Aside></Aside>
      <Nav_mob></Nav_mob>
    </>
  )
}

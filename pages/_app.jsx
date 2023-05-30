import '@/styles/globals.css'
import Nav_pc from '@/components/Nav_pc'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import wrapper from "@/reducer/config"
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedReducer } from '@/reducer';

function App({ Component, pageProps }) {

  const router = useRouter()
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <>
      <PersistGate persistor={persistor}>
        <Nav_pc></Nav_pc>
        <Header></Header>
        {
          router.pathname.includes("content") ?
            <div className="relative left-[20%] pt-16 px-2 w-[80%] z-0"><Component {...pageProps} /></div>
            : <div className="relative left-[27%] pt-16 px-2 w-[60%] z-0"><Component {...pageProps} /></div>
        }
        <div className='h-20'></div>
      </PersistGate>
    </>
  )
}

export default wrapper.withRedux(App)
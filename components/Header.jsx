import React from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";
import Logo from '@/public/images/Logo.svg'


export default function header(){
    const router = useRouter()

    return(
        <header className="fixed top-0 w-full px-3 py-3 h-14 border-b border-gray-light z-10 bg-white/95 backdrop-blur-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="absolute left-[55%] translate-x-[-50%] flex">
                {router.pathname.includes("/scholar") 
                ? <span className="self-center text-xl font-bold m-1 whitespace-nowrap dark:text-white">장학금</span>
                : (router.pathname.includes("/contest")
                ? <span className="self-center text-xl font-bold m-1 whitespace-nowrap dark:text-white">공모전</span>
                : (router.pathname.includes("/extra")
                ? <span className="self-center text-xl font-bold m-1 whitespace-nowrap dark:text-white">대외활동</span>
                : (router.pathname.includes("/login") || (router.pathname.includes("/signup")
                ? <></>
                : <div type="button" onClick={() => router.push("/") } value="Push" className='flex'>
                    <Logo className="h-8 mr-3"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Do.T</span>
                    </div>
                ))))}
            </div>
        </header>
    )
}
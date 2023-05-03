import { useRouter } from 'next/router'
import Link from "next/link";
import Logo from '@/public/images/Logo.svg'

export default function header(){
    const router = useRouter()

    return(
        <>
        <header className="fixed top-0 w-full px-3 py-3 h-14 border-b border-gray-light z-10 bg-white/95 backdrop-blur-sm dark:bg-gray-800 dark:border-gray-700">
            {router.pathname === "/" ? (
            <></>
            ) : (
            <svg onClick={() => router.back()}
            className="absolute left-4 w-8 h-8" fill="none" stroke="#1A1A1B" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            )}
                <Link href="/" className="absolute left-1/2 translate-x-[-50%] flex min-[821px]:left-[45%]">
                <Logo className="h-8 mr-3"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Do.T</span>
                </Link>
        </header>
        </>
    )
}
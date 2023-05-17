import Link from "next/link";
import { useState } from "react";

export default function nav() {
    const [dropdownIsOpen, setIsOpen] = useState(false)

    function OpenDropdown() {
        if (dropdownIsOpen) {
            setIsOpen(false)
        }
        else setIsOpen(true)
    }
    
    return(
    <>
        <nav id="logo-sidebar" className="fixed top-0 left-0 z-40 w-[240px] h-screen pt-10 bg-orange/95 border-r border-orange/20 " aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto ">
            <ul className="mt-10 space-y-2 font-medium text-[17px] text-white">
                <li className="pl-1 hover:bg-[#FF991C] rounded-lg">
                    <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                    <svg className="flex-shrink-0 w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    <span className="flex-1 ml-5 whitespace-nowrap  ">홈</span>
                    </Link>
                </li>
                <li className="pl-1 flex flex-col">
                    <button className="p-2 hover:bg-[#FF991C] rounded-lg flex items-center" onClick={OpenDropdown}>
                    <svg className="flex-shrink-0 w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" />
                    </svg>
                    <span className="ml-5">정보</span>
                    <svg className="w-5 absolute right-7" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </button>
                    {dropdownIsOpen
                    ? <ul className="text-[16px]">
                    <Link href="/scholar/scholar"><li className="pl-[65px] p-2 my-1 hover:bg-[#FF991C] rounded-lg">장학금</li></Link>
                    <Link href="/contest/contest"><li className="pl-[65px] p-2 my-1 hover:bg-[#FF991C] rounded-lg">공모전</li></Link>
                    <Link href="/extra/extra"><li className="pl-[65px] p-2 hover:bg-[#FF991C] rounded-lg">대외활동</li></Link>
                    </ul>
                    : <></>}
                </li>
                <li className="pl-1 hover:bg-[#FF991C] rounded-lg">
                    <Link href="/interest" className="flex items-center p-2 text-gray-900 rounded-lg">
                    <svg className="w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                    </svg>
                    <span className="flex-1 ml-5 whitespace-nowrap  ">관심목록</span>
                    </Link>
                </li>
                <li className="pl-1 hover:bg-[#FF991C] rounded-lg">
                    <Link href="/search/search" className="flex items-center p-2 text-gray-900 rounded-lg ">
                    <svg className="w-8" fill="white" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span className="flex-1 ml-5 whitespace-nowrap  ">검색</span>
                    </Link>
                </li>
                <li className="pl-1 hover:bg-[#FF991C] rounded-lg">
                    <Link href="/mypage" className="flex items-center p-2 text-gray-900 rounded-lg ">
                    <svg className="w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="flex-1 ml-5 whitespace-nowrap  ">마이페이지</span>
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    </>
    )
}
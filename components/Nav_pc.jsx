import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginFalse } from "@/reducer/login";

export default function nav() {
    const router = useRouter()
    const [dropdownIsOpen, setIsOpen] = useState(false)
    const login = useSelector(state => state.login.isLogin)
    const dispatch = useDispatch()
    const [ai_link, setAI_Link] = useState("/login")
    const [interest_link, setInterest_Link] = useState("/login")

    const LinkHandler = () => {
        console.log(login)
        if (login) {
            setAI_Link("/ai")
            setInterest_Link("/interest")
        }
        else {
            alert("해당 메뉴는 로그인이 필요합니다!")
            setAI_Link("/login")
            setInterest_Link("/login")
        }
    }

    function OpenDropdown() {
        if (dropdownIsOpen) {
            setIsOpen(false)
        }
        else setIsOpen(true)
    }

    const LoginHandler = () => {
        if (confirm("로그아웃하시겠습니까?")) {
            dispatch(loginFalse())
            router.push("/login")
        }
    }

    return (
        <>
            <nav id="logo-sidebar" className="fixed top-0 left-0 z-40 w-[240px] h-screen pt-10 bg-orange/95 border-r border-orange/20 " aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto ">
                    <ul className="mt-20 space-y-2 font-medium text-[17px] text-white">
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
                            <Link href={ai_link} onClick={LinkHandler} className="flex items-center p-2 text-gray-900 rounded-lg ">
                                <svg className="w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"></path>
                                </svg>
                                <span className="flex-1 ml-5 whitespace-nowrap  ">AI 맞춤 정보</span>
                            </Link>
                        </li>
                        <li className="pl-1 hover:bg-[#FF991C] rounded-lg">
                            <Link href={interest_link} onClick={LinkHandler} className="flex items-center p-2 text-gray-900 rounded-lg">
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
                    </ul>
                    {login
                        ? <><button onClick={LoginHandler} className="mt-10 border rounded text-white p-2 px-10 ml-10 text-lg font-bold bg-white/10 hover:bg-white/30">로그아웃</button>
                        </>
                        : <Link href="/login">
                            <button className="mt-10 border rounded text-white p-2 px-10 ml-10 text-lg font-bold bg-white/10 hover:bg-white/30">로그인</button>
                        </Link>}
                </div>
            </nav>
        </>
    )
}
import Link from "next/link";
import { useEffect, useState } from "react";
import { testApi } from "./api/instance";

export default function login() {
    const api = async () => {
        const response = await testApi()
        console.log(response)
    }
    api()
    
    return (
    <>
    <div className="mt-14 flex flex-col items-center">
    <h1 className="font-extrabold text-[35px] text-black mt-10">로그인</h1>
    <div className="w-[350px]">
        <label className="block mt-12 mb-2 ml-1 text-xl font-bold text-black">아이디</label>
        <input type="text" className="h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5" placeholder="4자~17자 이내로 입력해주세요."></input>
    </div>
    <div className="w-[350px]">
        <label className="block mt-6 mb-2 ml-1 text-xl font-bold text-black">비밀번호</label>
        <input type="text" className="h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5" placeholder="9자 이상을 입력해주세요."></input>
    </div>

    <button className="w-[350px] h-14 mt-16 bg-orange rounded-md text-white text-xl">로그인</button>
    <Link href="/signup">
        <button className="w-[350px] h-12 mt-6 bg-gray/70 rounded-md text-white text-xl">회원가입</button>
    </Link>
    </div>
    </>
    )
}
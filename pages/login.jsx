import Link from "next/link";
import { useEffect, useState } from "react";
import { loginApi } from "./api/user";
import { useDispatch, useSelector } from "react-redux";
import { loginTrue } from "@/reducer/login";
import { useRouter } from "next/router";

export default function login() {
    const dispatch = useDispatch()
    const router = useRouter()

    const [id, setId] = useState('')
    const [idstyle, setIdStyle] = useState("h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [idError, setIdError] = useState(" ")

    const [password, setPassword] = useState('')
    const [passwordstyle, setPasswordStyle] = useState("h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [passwordError, setPasswordError] = useState(" ")

    const handleIdChange = (e) => {
        let newId = e.target.value
        setId(newId)
        if (newId !== "" && (newId.length < 4 || newId.length > 17)) {
            setIdStyle("h-[48px] border border-red-500 text-black placeholder-gray-dark text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setIdError(<span className="mt-2 text-red-600 text-sm">4자~17자 이내로 입력해주세요!</span>)
        }
        else {
            setIdStyle("h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setIdError("")
        }
    }

    const handlePwChange = (e) => {
        let newPassword = e.target.value
        setPassword(newPassword)
        if (newPassword !== "" && newPassword.length < 9) {
            setPasswordStyle("h-[48px] border border-red-500 text-black placeholder-gray-dark text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setPasswordError(<span className="mt-2 text-red-600 text-sm">9자 이상 입력해주세요!</span>)
        }
        else {
            setPasswordStyle("h-[48px] border border-gray text-black placeholder-gray-dark text-sm rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setPasswordError("")
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        api(id, password)
    }

    const api = async (id, password) => {
        const response = await loginApi(id, password)
        if (!response.data.isSuccess) {
            alert("회원정보가 일치하지 않습니다!")
        }
        else if (response.data.isSuccess) {
            alert("로그인이 완료되었습니다!")
            dispatch(loginTrue())
            router.push("/")
        }
    }


    return (
        <>

            <div className="mt-8 flex flex-col items-center">
                <form onSubmit={onSubmitHandler}>
                    <h1 className="font-extrabold text-[35px] text-black mt-10">로그인</h1>
                    <div className="w-[350px]">
                        <label className="block mt-12 mb-2 ml-1 text-xl font-bold text-black">아이디</label>
                        <input name="id" type="text" value={id} onChange={handleIdChange} className={idstyle} placeholder="4자~17자 이내로 입력해주세요."></input>
                        {idError}
                    </div>
                    <div className="w-[350px]">
                        <label className="block mt-6 mb-2 ml-1 text-xl font-bold text-black">비밀번호</label>
                        <input name="password" type="password" value={password} onChange={handlePwChange} className={passwordstyle} placeholder="9자 이상을 입력해주세요."></input>
                        {passwordError}
                    </div>

                    <input type="submit" value="로그인" className="w-[350px] h-14 mt-16 bg-orange rounded-md text-white text-xl hover:cursor-pointer"></input>
                </form>
                <Link href="/signup">
                    <button className="w-[350px] h-12 mt-6 bg-gray/70 rounded-md text-white text-xl ">회원가입</button>
                </Link>
            </div>
        </>
    )
}
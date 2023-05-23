import { useState } from 'react'
import { signupApi } from '@/pages/api/user'

export default function signup() {
    const [name, setName] = useState('')
    const [namestyle, setNameStyle] = useState("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [nameError, setNameError] = useState("")

    const [id, setId] = useState('')
    const [idstyle, setIdStyle] = useState("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [idError, setIdError] = useState("")

    const [password, setPassword] = useState('')
    const [passwordstyle, setPasswordStyle] = useState("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [passwordError, setPasswordError] = useState("")

    const [check, setCheck] = useState('')
    const [checkstyle, setCheckStyle] = useState("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
    const [checkError, setCheckError] = useState("")

    let kor = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g
    let eng = /[a-zA-Z]/g
    let num = /[0-9]/g

    const handleNameChange = (e) => {
        let newName = e.target.value
        setName(newName)
        if (newName === "") {
            setNameStyle("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setNameError("")
        }
        else if (eng.test(newName) || num.test(newName) || newName.search(/\s/) !== -1) {
            setNameStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setNameError(<span className="mt-2 text-red-600 text-[12px]">한글만 입력할 수 있습니다!</span>)
        }
        else if (newName.length < 2) {
            setNameStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setNameError(<span className="mt-2 text-red-600 text-[12px]">2자 이상 입력해주세요!</span>)
        }
        else {
            setNameStyle("h-[40px] border border-green-400 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5")
            setNameError("")
        }
    }

    const handleIdChange = (e) => {
        let newId = e.target.value
        setId(newId)
        if (newId === "") {
            setIdStyle("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setIdError("")
        }
        else if (kor.test(newId) || newId.search(/\s/) !== -1) {
            setIdStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setIdError(<span className="mt-2 text-red-600 text-[12px]">영어와 숫자만 입력할 수 있습니다!</span>)
        }
        else if (newId.length < 4 || newId.length > 17) {
            setIdStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setIdError(<span className="mt-2 text-red-600 text-[12px]">4자~17자 이내로 입력해주세요!</span>)
        }
        else {
            setIdStyle("h-[40px] border border-green-400 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5")
            setIdError("")
        }
    }

    const handlePasswordChange = (e) => {
        let newPassword = e.target.value
        setPassword(newPassword)
        if (newPassword === "") {
            setPasswordStyle("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setPasswordError("")
        }
        else if (kor.test(newPassword) || newPassword.search(/\s/) !== -1) {
            setPasswordStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setPasswordError(<span className="mt-2 text-red-600 text-[12px]">영어와 숫자, 특수문자만 입력할 수 있습니다!</span>)
        }
        else if (newPassword.length < 9) {
            setPasswordStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setPasswordError(<span className="mt-2 text-red-600 text-[12px]">9자 이상 입력해주세요!</span>)
        }
        else {
            setPasswordStyle("h-[40px] border border-green-400 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5")
            setPasswordError("")
        }
    }

    const handleCheckChange = (e) => {
        let newCheck = e.target.value
        setCheck(newCheck)
        if (newCheck === "") {
            setCheckStyle("h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5")
            setCheckError("")
        }
        else if (newCheck != password) {
            setCheckStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
            setCheckError(<span className="mt-2 text-red-600 text-[12px]">비밀번호가 일치하지 않습니다!</span>)
        }
        else {
            setCheckStyle("h-[40px] border border-green-400 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5")
            setCheckError("")
        }
    }

    const onSubmitHandler = () => {
        api(id, password)
    }

    const api = async (id, password) => {
        const response = await signupApi(id, password)
        !response.data.isSuccess &&
            setIdStyle("h-[40px] border border-red-500 text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
        !response.data.isSuccess &&
            setIdError(<span className="mt-2 text-red-600 text-[12px]">이미 존재하는 아이디입니다</span>)
        response.data.isSuccess && alert("회원가입이 완료되었습니다!")
        alert(response.data.message)
    }


    return (
        <>
            <form onSubmit={onSubmitHandler}
                className="flex flex-col items-center">
                <h1 className="font-extrabold text-[35px] text-black mt-5">회원가입</h1>
                <div className="w-[350px]">
                    <label className="block mt-8 mb-2 ml-1 text-xl font-bold text-black">이름</label>
                    <input name="name" type="text" value={name} onChange={handleNameChange}
                        className={namestyle} placeholder="실명을 입력해주세요." />
                    {nameError}
                </div>
                <div className="w-[350px]">
                    <label className="block mt-8 mb-2 ml-1 text-xl font-bold text-black">생년월일</label>
                    <input name="birth" type="text" className="h-[40px] border border-gray text-black placeholder-gray-dark text-[12px] rounded-lg focus:ring-gray focus:border-gray-dark block w-full p-2.5" placeholder="생년월일 8자리를 입력해주세요."></input>
                </div>
                <div className="w-[350px]">
                    <label className="block mt-8 mb-2 ml-1 text-xl font-bold text-black">아이디</label>
                    <input name="id" type="text" value={id} onChange={handleIdChange}
                        className={idstyle} placeholder="4자~17자 이내로 입력해주세요." />
                    {idError}
                </div>
                <div className="w-[350px]">
                    <label className="block mt-8 mb-2 ml-1 text-xl font-bold text-black">비밀번호</label>
                    <input name="password" type="password" value={password} onChange={handlePasswordChange}
                        className={passwordstyle} placeholder="9자 이상을 입력해주세요." />
                    {passwordError}
                </div>
                <div className="w-[350px]">
                    <label className="block mt-4 mb-2 ml-1 text-xl font-bold text-black">비밀번호 확인</label>
                    <input type="password" value={check} onChange={handleCheckChange}
                        className={checkstyle} placeholder="9자 이상을 입력해주세요." />
                    {checkError}
                </div>

                <input type="submit" value="회원가입"
                    className="w-[350px] h-14 mt-16 bg-orange rounded-md text-white text-xl" />
            </form>
        </>
    )
}
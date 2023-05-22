
import { interestapi } from "@/pages/api/contents";
import { useEffect, useState } from "react";

export default function list() {
    const [contents, setContents] = useState()

    const api = async () => {
        const response = await interestapi()
        response.data.isSuccess && setContents(response.data.result)
    }

    useEffect(() => {
        api()
    }, [])

    return (
        <>
            {contents ? contents.map((content) => (
                <ul className='justify-start mb-4 text-black pl-1'>
                    <li className="flex justify-start mt-6">
                        <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type}</div>
                    </li>
                    <li className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                    <li className='mt-1 font-bold'>{content.title}</li>
                    <li className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : "D - " + content.dday}</li>
                </ul>
            ))
                :
                <div >
                    <svg className="w-60 absolute top-80 left-1/3" fill="none" stroke="#E5E7EB" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <h1 className="absolute top-[580px] left-[33%] font-bold text-lg">검색결과가 존재하지 않습니다!</h1>
                    <span className="absolute top-[610px] left-[35%] text-gray-dark">다른 검색어를 입력해 주세요</span>
                </div>
            }
        </>
    )
}
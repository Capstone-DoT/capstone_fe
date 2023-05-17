
import { interestapi } from "@/pages/api/contents";
import { useEffect, useState } from "react";

export default function list() {
    const [contents, setContents] = useState()

    const api = async () => {
        const response = await interestapi()
        response.data.isSuccess && setContents(response.data.result)
    }

    console.log(contents)
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
                    <li className='mt-2 text-orange text-xs font-bold'>D-{content.dday}</li>
                </ul>
            ))
                :
                <div >
                    <svg className="w-60 absolute top-80 left-1/3" fill="none" stroke="#E5E7EB" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <h1 className="absolute top-[580px] left-[32%] font-bold text-lg">아직 관심목록에 넣은 정보가 없어요!</h1>
                    <span className="absolute top-[610px] left-[30%] text-gray-dark">다양한 정보를 확인하고 관심목록에 넣어보세요</span>
                </div>
            }
        </>
    )
}
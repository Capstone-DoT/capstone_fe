
import { scholarapi } from "@/pages/api/contents";
import { contestapi } from "@/pages/api/contents";
import { extraapi } from "@/pages/api/contents";
import { interestapi } from "@/pages/api/contents";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


export default function list() {
    const router = useRouter()
    const [contents, setContents] = useState()
    const [ref, inView] = useInView();
    const [page, setPage] = useState(0);


    const getContents = async () => {
        const response = await interestapi()
        response.data.isSuccess && setContents(response.data.result)
    }

    useEffect(() => {
        getContents()
    }, [])

    return (
        <div ref={ref}>
            {contents && contents.map((content) => (
                <ul className='justify-start mb-4 text-black pl-1'>
                    <li key={content.type} className="flex justify-start mt-6">
                        <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                    </li>
                    <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                    <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                    <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : "D - " + content.dday)}</li>
                </ul>
            ))}
        </div>
    )
}
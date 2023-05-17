import { contestapi } from "@/pages/api/contents";
import { useEffect, useState } from "react";

export default function list() {
    const [contents, setContents] = useState()

    const api = async () => {
        const response = await contestapi()
        response.data.isSuccess && setContents(response.data.result)
    }

    console.log(contents)
    useEffect(() => {
        api()
    }, [])

    return (
        <>
            {contents && contents.map((content) => (
                <ul className='justify-start mb-4 text-black pl-1'>
                    <li className="flex justify-start mt-6">
                        <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type}</div>
                    </li>
                    <li className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                    <li className='mt-1 font-bold'>{content.title}</li>
                    <li className='mt-2 text-orange text-xs font-bold'>D-{content.dday}</li>
                </ul>
            ))}

        </>
    )
}
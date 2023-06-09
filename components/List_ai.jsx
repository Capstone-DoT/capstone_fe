
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function list(props) {
    const { AIcontents } = props
    const router = useRouter()
    const { error } = props
    const [message, setMessage] = useState()

    const ContentsHandler = (e) => {
        let newPath = router.pathname.split("/")
        router.push({
            pathname: "/" + newPath[1] + "/content",
            query: {
                id: e.currentTarget.value
            }
        })
    }

    const getMessage = () => {
        if (AIcontents === undefined) {
            setMessage(<h1 className="text-gray-dark">유사한 정보를 찾을 수 없습니다 😥</h1>)
        }
        else if (error === false) {
            setMessage(<h1 className="text-gray-dark">해당 추천은 유사도가 떨어질 수 있습니다 😥</h1>)
        }
    }

    useEffect(() => {
        getMessage()
    }, [])

    return (
        <div className="pl-2">
            {message}
            {AIcontents && AIcontents.map((content) => (
                <button onClick={ContentsHandler} value={content.id} className="w-full text-left">
                    <ul className='mb-4 text-black pl-1'>
                        {content === AIcontents[0] ? <></> : <div className="relative left-[-5%] mt-3 w-full bg-gray/50 h-[1px]"></div>}
                        <li key={content.type} className="flex justify-start mt-6">
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                        </li>
                        <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                        <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                        <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : "D - " + content.dday)}</li>
                    </ul>
                </button>))}
        </div>
    )
}
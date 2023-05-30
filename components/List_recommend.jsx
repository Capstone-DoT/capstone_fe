
import { contentapi } from "@/pages/api/interest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function list(props) {
    const router = useRouter()
    const [scholar, setScholar] = useState([])
    const [contest, setContest] = useState([])
    const [extra, setExtra] = useState([])
    const { type } = props
    const { ordering } = props

    const getContents = async () => {
        const response = await contentapi(type, ordering)
        console.log(response.data.result)
        response.data.isSuccess && setScholar(response.data.result.AIResult.scholarship)
        response.data.isSuccess && setContest(response.data.result.AIResult.contest)
        response.data.isSuccess && setExtra(response.data.result.AIResult.activity)
    }

    const ScholarHandler = () => {
        router.push({
            pathname: "/scholar/content",
            query: {
                id: e.currentTarget.value
            }
        })
    }
    const ContestHandler = () => {
        router.push({
            pathname: "/contest/content",
            query: {
                id: e.currentTarget.value
            }
        })
    }
    const ExtraHandler = () => {
        router.push({
            pathname: "/extra/content",
            query: {
                id: e.currentTarget.value
            }
        })
    }

    useEffect(() => {
        getContents()
    }, [type, ordering])

    return (
        <div className="pl-2">
            {scholar.length !== 0 && scholar.map((content) => (
                <button onClick={ScholarHandler} value={content.id} className="w-full text-left">
                    <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                    <ul className='mb-4 text-black pl-1 '>
                        <li key={content.type} className="flex justify-start mt-6">
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                        </li>
                        <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                        <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                        <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                    </ul>
                </button>
            ))}
            {contest.length !== 0 && contest.map((content) => (
                <button onClick={ContestHandler} value={content.id} className="w-full text-left">
                    <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                    <ul className='mb-4 text-black pl-1 '>
                        <li key={content.type} className="flex justify-start mt-6">
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                        </li>
                        <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                        <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                        <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                    </ul>
                </button>
            ))}
            {extra.length !== 0 && extra.map((content) => (
                <button onClick={ExtraHandler} value={content.id} className="w-full text-left">
                    <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                    <ul className='mb-4 text-black pl-1 '>
                        <li key={content.type} className="flex justify-start mt-6">
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                        </li>
                        <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                        <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                        <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                    </ul>
                </button>
            ))}
            {((scholar.length === 0 && contest.length === 0 && extra.length === 0) || (type === "scholarship" && scholar.length === 0) || (type === "contest" && contest.length === 0) || (type === "activity" && extra.length === 0)) &&
                <div >
                    <h1 className="text-[100px] absolute top-[350px] left-[40%]">😥</h1>
                    <h1 className="absolute top-[500px] left-[33%] font-bold text-lg">추천정보를 찾을 수 없습니다!</h1>
                    <span className="absolute top-[530px] left-[33%] text-gray-dark">관심목록에 정보를 더 넣어보세요</span>
                </div>
            }
        </div>
    )
}

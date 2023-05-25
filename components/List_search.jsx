
import { searchapi } from "@/pages/api/contents";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function list(props) {
    const router = useRouter()
    const [contents, setContents] = useState([])
    const { type } = props
    const { ordering } = props
    const { search } = props

    const getContents = async () => {
        const response = await searchapi(type, ordering, search)
        response.data.isSuccess && setContents(response.data.result)
    }

    const ContentsHandler = (e, content_type) => {
        if (content_type === "activity") {
            router.push({
                pathname: "/extra/content",
                query: {
                    id: e.currentTarget.value
                }
            })
        }
        else if (content_type === "scholarship") {
            router.push({
                pathname: "/scholar/content",
                query: {
                    id: e.currentTarget.value
                }
            })
        }
        else {
            router.push({
                pathname: "/" + content_type + "/content",
                query: {
                    id: e.currentTarget.value
                }
            })
        }

    }

    useEffect(() => {
        getContents()
    }, [type, ordering, search])

    return (
        <div>
            {/* 기간 안지난 애들 */}
            {
                contents && contents.map((content) => (
                    String(content.dday).includes("-") ? <></>
                        :
                        <button key={content.id} onClick={e => ContentsHandler(e, content.contentType)} value={content.id} className="w-full text-left">
                            <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                            <ul className='justify-start mb-4 text-black pl-1'>
                                <li key={content.type} className="flex justify-start mt-6">
                                    <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                                </li>
                                <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                                <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                                <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                            </ul>
                        </button>
                ))
            } {/* 기간 지난 애들 */}
            {
                contents && contents.map((content) => (
                    String(content.dday).includes("-") ?
                        <button key={content.id} onClick={e => ContentsHandler(e, content.contentType)} value={content.id} className="w-full text-left">
                            <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                            <ul className='justify-start mb-4 text-black pl-1'>
                                <li key={content.type} className="flex justify-start mt-6">
                                    <div className='flex justify-center items-center h-6 bg-gray/25 text-gray-dark px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                                    <span className="ml-1 text-gray-dark font-bold">기간이 지난 공고입니다</span>
                                </li>
                                <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                                <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                                <li key={content.dday} className='mt-2 text-gray-dark text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                            </ul>
                        </button>
                        : <></>
                ))
            } {/* 검색결과 없을 때 */}
            {contents.length === 0 &&
                <div >
                    <svg className="w-60 absolute top-80 left-1/3" fill="none" stroke="#E5E7EB" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <h1 className="absolute top-[580px] left-[33%] font-bold text-lg">검색결과가 존재하지 않습니다!</h1>
                    <span className="absolute top-[610px] left-[35%] text-gray-dark">다른 검색어를 입력해 주세요</span>
                </div>}
        </div>
    )
}
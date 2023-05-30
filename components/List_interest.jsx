
import { contentapi } from "@/pages/api/interest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hot from "@/components/List_hot"
import { useSelector, useDispatch } from "react-redux";

export default function list(props) {
    const router = useRouter()
    const [contents, setContents] = useState([])
    const [isLoading, setIsLoading] = useState()
    const { type } = props
    const { ordering } = props
    const token = useSelector(state => state.login.setToken)


    const getContents = async () => {
        setIsLoading(true)
        const response = await contentapi(type, ordering, token)
        response.data.isSuccess && setContents(response.data.result.findResult)
        setIsLoading(false)
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
    }, [type, ordering])

    return (
        <>
            {isLoading
                ? <div role="status ">
                    <svg aria-hidden="true" className="w-20  absolute top-72 left-[40%] mr-2 text-gray-light animate-spin fill-orange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                </div>
                : ((type === "all" && contents.length === 0) ?
                    <>
                        <h1 className="font-bold mt-6 text-gray-dark text-lg">관심목록에 담아 놓은 정보가 없으시군요! 이런 정보는 어떠세요?</h1>
                        <Hot></Hot></>
                    : (contents.length === 0
                        ? <div >
                            <h1 className="text-[100px] absolute top-[350px] left-[40%]">😥</h1>
                            <h1 className="absolute top-[500px] left-[26%] font-bold text-lg">관심목록에 해당 분야가 존재하지 않습니다!</h1>
                        </div>
                        : <></>))
            }
            {contents.length !== 0 && contents.map((content) => (
                <button onClick={e => ContentsHandler(e, content.contentType)} key={content.id} value={content.id} className="w-full text-left">
                    <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
                    <ul className='mb-4 text-black pl-1 '>

                        <li key={content.type} className="flex justify-start mt-6">
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>
                                {content.contentType === "activity"
                                    ? "대외활동"
                                    : (content.contentType === "scholarship"
                                        ? "장학금"
                                        : "공모전"
                                    )}</div>
                            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[11px] font-bold rounded-xl'>{content.type === "" ? "기타" : content.type}</div>
                        </li>
                        <li key={content.institution} className='mt-3 text-sub text-gray-dark'>{content.institution}</li>
                        <li key={content.title} className='mt-1 font-bold'>{content.title}</li>
                        <li key={content.dday} className='mt-2 text-orange text-xs font-bold'>{String(content.dday).includes("-") ? "D + " + String(content.dday).substr(1) : (content.dday === null ? "상시모집" : (content.dday === 0 ? "D - day" : "D - " + content.dday))}</li>
                    </ul>
                </button>
            ))}
        </>
    )
}

import { contentapi } from "@/pages/api/interest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function list(props) {
    const router = useRouter()
    const [contents, setContents] = useState([])
    const { type } = props
    const { ordering } = props

    const getContents = async () => {
        const response = await contentapi(type, ordering)
        response.data.isSuccess && setContents(response.data.result.findResult)
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
            {contents.length !== 0 ? contents.map((content) => (
                <button onClick={e => ContentsHandler(e, content.contentType)} value={content.id} className="w-full text-left">
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
            ))
                :
                <div role="status ">
                    <svg aria-hidden="true" className="w-20  absolute top-72 left-[40%] mr-2 text-gray-light animate-spin fill-orange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                </div>
                // <div >
                //     <svg className="w-40 absolute top-[320px] left-[38%]" fill="none" stroke="#E5E7EB" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                //         <path strokeLinecap="round" strokeLinejoin="round" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                //     </svg>
                //     <h1 className="absolute top-[500px] left-[32%] font-bold text-lg">아직 관심목록에 넣은 정보가 없어요!</h1>
                //     <span className="absolute top-[530px] left-[30%] text-gray-dark">다양한 정보를 확인하고 관심목록에 넣어보세요</span>
                // </div>
            }
        </>
    )
}
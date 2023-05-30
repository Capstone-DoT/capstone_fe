import { scholarapi } from "@/pages/api/contents";
import { contestapi } from "@/pages/api/contents";
import { extraapi } from "@/pages/api/contents";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


export default function list(props) {
  const router = useRouter()
  const [contents, setContents] = useState([])
  const [ref, inView] = useInView();
  const [pageno, setPageno] = useState(1);
  const [viewcount, setViewcount] = useState(0)
  const { type } = props
  const { ordering } = props
  const { search } = props


  const getContents = async (contents, pageno) => {
    if (router.pathname.includes("scholar")) {
      const response = await scholarapi(type, ordering, search, pageno)
      response.data.isSuccess && setContents([...contents, ...response.data.result])
    }
    else if (router.pathname.includes("contest")) {
      const response = await contestapi(type, ordering, search, pageno)
      response.data.isSuccess && setContents([...contents, ...response.data.result])
    }
    else if (router.pathname.includes("extra")) {
      const response = await extraapi(type, ordering, search, pageno)
      response.data.isSuccess && setContents([...contents, ...response.data.result])
    }
  }

  const ContentsHandler = (e) => {
    let newPath = router.pathname.split("/")
    router.push({
      pathname: "/" + newPath[2] + "/content",
      query: {
        id: e.currentTarget.value
      }
    })
  }

  useEffect(() => {
    getContents(contents, pageno)
  }, [search, pageno])

  useEffect(() => {
    getContents([], 1)
  }, [type, ordering])

  useEffect(() => {
    if (inView) {
      setViewcount(prevState => prevState + 1)
      if (viewcount >= 1) {
        setPageno(prevState => prevState + 1)
      }
    }
  }, [inView])

  return (
    <div>
      {/* 기간 안지난 애들 */}
      {
        contents.length !== 0 && contents.map((content) => (
          String(content.dday).includes("-") ? <></>
            :
            <button onClick={ContentsHandler} value={content.id} className="w-full text-left">
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
      } {/* 기간 지난 애들 */}
      {
        contents.length !== 0 && contents.map((content) => (
          String(content.dday).includes("-") ?
            <button onClick={ContentsHandler} value={content.id} className="w-full text-left">
              <div className="relative mt-3 w-full bg-gray/50 h-[1px]"></div>
              <ul className='mb-4 text-black pl-1'>
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
      }
      <div ref={ref} ></div>
    </div >
  )
}
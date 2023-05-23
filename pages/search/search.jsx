import Search from "@/components/Searchbar"
import { useRouter } from "next/router"

export default function search() {
  const router = useRouter()

  const SearchHandler = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/search/result',
      query: {
        search: e.currentTarget.value
      }
    })
  }

  return (
    <>
      <h1 className="font-extrabold text-2xl text-black m-2 pb-2">검색</h1>
      <Search initValue=""></Search>
      <h1 className="mt-6 mb-2 ml-1 text-lg font-bold text-black">Do.T 추천검색어</h1>
      <div className="flex mb-2">
        <button onClick={SearchHandler} value="한국장학재단" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>한국장학재단</span>
        </button>
        <button onClick={SearchHandler} value="경기도" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>경기도</span>
        </button>
        <button onClick={SearchHandler} value="전문대" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>전문대</span>
        </button>
        <button onClick={SearchHandler} value="서포터즈" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>서포터즈</span>
        </button>
        <button onClick={SearchHandler} value="봉사단" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>봉사단</span>
        </button>
        <button onClick={SearchHandler} value="디자인" className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>디자인</span>
        </button>
      </div>
      <h1 className="mt-6 mb-3 ml-1 text-lg font-bold text-black">Do.T 인기검색어</h1>
      <div className="flex flex-col items-start ml-1 text-black">
        <button onClick={SearchHandler} value="국비지원" className="mb-3">
          국비지원
        </button>
        <button onClick={SearchHandler} value="멘토링" className="mb-3">
          멘토링
        </button>
        <button onClick={SearchHandler} value="SK" className="mb-3">
          SK
        </button>
        <button onClick={SearchHandler} value="관광공사" className="mb-3">
          관광공사
        </button>
        <button onClick={SearchHandler} value="네이밍" className="mb-3">
          네이밍
        </button>
        <button onClick={SearchHandler} value="일러스트" className="mb-3">
          일러스트
        </button>
      </div>
    </>
  )
}
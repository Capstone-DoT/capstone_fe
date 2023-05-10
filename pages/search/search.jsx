import Search from "@/components/Searchbar"

export default function search() {
    return(
      <>
      <h1 className="font-extrabold text-2xl text-black m-2 pb-2">검색</h1>
      <Search></Search>
      <h1 className="mt-6 mb-2 ml-1 text-lg font-bold text-black">Do.T 추천검색어</h1>
      <div className="flex mb-2">
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>한국장학재단</span>
        </button>
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>경기도</span>
        </button>
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>전문대</span>
        </button>
      </div>
      <div className="flex">
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>서포터즈</span>
        </button>
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mr-2 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>봉사단</span>
        </button>
        <button className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark'>
          <span className='mr-2 self-center text-black text-sm'>디자인</span>
        </button>
      </div>
      <h1 className="mt-6 mb-2 ml-1 text-lg font-bold text-black">Do.T 인기검색어</h1>
      <ul className="ml-1 text-black">
        <li className="mb-2">
          어쩌구
        </li>
        <li className="mb-2">
          저쩌구
        </li>
        <li className="mb-2">
          어쩌구
        </li>
        <li className="mb-2">
          저쩌구
        </li>
        <li className="mb-2">
          어쩌구
        </li>
        <li className="mb-2">
          저쩌구
        </li>
      </ul>
  </>
    )
}
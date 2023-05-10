import Divide from '@/components/Divideline'

export default function mypage() {
    return(
    <>
    <h1 className="font-extrabold text-2xl text-black m-2 pb-2">마이페이지</h1>
    <div className="flex flex-col items-center mb-6 w-full">
      <svg className="w-24 " fill="#E5E7EB" strokeWidth={0.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clipRule="evenodd" fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      <div className="mt-1">
        <span className="text-black font-bold text-[23px]">정은지</span><span className="text-black text-md mt-8"> 님</span>
      </div>
    </div>
    <Divide></Divide>
    <ul className='gird divide-y divide-gray/30'>
      <li className='flex h-14 items-center'>
        <svg className="w-8 ml-4" fill="none" stroke="#9CA3AF" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <span className='ml-3 font-bold text-b'>회원정보 수정</span>
        <svg className="w-5 ml-4" fill="none" stroke="#C5C6CC" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </li>
      <li className='flex '>
        <svg className="w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <span>회원정보 수정</span>
      </li>
    </ul>
    </>
    )

}
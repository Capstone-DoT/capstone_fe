import { useRouter } from 'next/router'
import Link from "next/link";

export default function nav_mob() {
  const router = useRouter()

  return (
    <div className="min-[821px]:hidden fixed bottom-0 w-full border-t border-gray-light bg-white">
      <ul className="grid grid-cols-4 justify-stretch pt-2.5 mb-1.5">

      {/* 홈 */}
      <li className="grid justify-items-center">
      <Link href="/" className="grid justify-items-center">
        {router.pathname === "/" ? (
          // none
          <svg className="w-9 h-9" fill="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          ) : (
          // fill
          <svg className="w-9 h-9" fill="none" stroke="#9CA3AF" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          )}
        {router.pathname === "/" ? (
        <span className="text-orange">홈</span>
        ) : (
        <span className="text-[#9CA3AF]">홈</span>
        )}
      </Link>
      </li>

      {/* 관심목록 */}
      <li className="grid justify-items-center">
      <Link href="/interest" className="grid justify-items-center">
      {router.pathname === "/interest" ? (
        //fill
        <svg className="w-9 h-9" fill="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clipRule="evenodd" fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
      </svg>
        ) : (
        //none
        <svg className="w-9 h-9" fill="none" stroke="#9CA3AF" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        )}
        {router.pathname === "/interest" ? (
        <span className="text-orange">관심목록</span>
        ) : (
        <span className="text-[#9CA3AF]">관심목록</span>
        )}
      </Link>
      </li>

      {/* 검색 */}
      <li className="grid justify-items-center">
      <Link href="/search" className="grid justify-items-center">
      {router.pathname === "/search" ? (
        <svg className="w-9 h-9" fill="orange" stroke="orange" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        ) : (
        <svg className="w-9 h-9" fill="none" stroke="#9CA3AF" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        )}
      {router.pathname === "/search" ? (
        <span className="text-orange">검색</span>
        ) : (
        <span className="text-[#9CA3AF]">검색</span>
        )}
      </Link>
      </li>

      {/* 마이페이지 */}
      <li className="grid justify-items-center">
      <Link href="/mypage" className="grid justify-items-center">
      {router.pathname === "/mypage" ? (
        <svg className="w-9 h-9" fill="orange" stroke="orange" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        ) : (
        <svg className="w-9 h-9" fill="none" stroke="#9CA3AF" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        )}
      {router.pathname === "/mypage" ? (
        <span className="text-orange">마이페이지</span>
        ) : (
        <span className="text-[#9CA3AF]">마이페이지</span>
        )}
      </Link>
      </li>
      </ul>
    </div>
  );
}
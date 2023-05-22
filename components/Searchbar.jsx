import { useRouter } from "next/router"
import { useState } from "react"

export default function searchbar(props) {
    const router = useRouter()
    const [text, setText] = useState(props.initValue)

    const TextHandler = (e) => {
        let newText = e.target.value
        setText(newText)
    }

    const SearchHandler = (e) => {
        e.preventDefault()
        router.replace({
            pathname: '/search/result',
            query: {
                search: text
            }
        })
    }

    return (
        <form onSubmit={SearchHandler}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-6 text-gray-500 dark:text-gray-400" fill="none" stroke="#FFA12E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input id="default-search" className="pl-14 block h-15 w-full p-4 pl-10 text-sm text-gray-900 placeholder-[#9CA3AF] border-2 ring-[#FFA12E] border border-[#FFA12E] focus:ring-[#FFA12E] focus:border-[#FFA12E]" placeholder="찾고 싶은 정보를 검색해보세요 !"
                    value={text}
                    onChange={TextHandler}
                    required>
                </input>
            </div>
        </form>

    )
}
import Link from "next/link"

export default function aside(){
    return(
        <>
        <aside className="hidden lg:flex fixed top-0 right-0 z-40 w-80 h-screen pt-10 transition-transform -translate-x-full bg-white sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <h1> 뭘 넣지 </h1>
        </aside>
        </>
    )
}
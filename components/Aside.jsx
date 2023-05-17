import Link from "next/link"
import List from "@/components/List_scholar"

export default function aside() {
    return (
        <>
            <aside className="fixed top-0 right-0 z-40 w-[400px] border border-l border-gray/20 h-screen pt-10 bg-white " aria-label="Sidebar">
                <div className="ml-5">
                    <h1 className="text-xl font-bold mb-10"> '장학금 이름'과 유사한 장학금입니다 </h1>
                    <List></List>
                </div>

            </aside>
        </>
    )
}
import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'

export default function interest() {
    return(
    <>
        <div className="pt-16 px-2 min-[821px]:w-1/2 min-[821px]:ml-64 max-[820px]:w-full max-[820px]:px-5 z-0">
            <h1 className="font-bold text-2xl text-black mb-2">관심목록</h1>
            <div className='flex'>
                <Dropdown></Dropdown>
                <div className='w-2'></div>
                <Dropdown></Dropdown>
            </div>
            <List></List>
        </div>
    </>
    )
}
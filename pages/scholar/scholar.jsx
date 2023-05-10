import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'

export default function scholar() {
    return(
    <>
    <div className='flex my-2'>
        <Dropdown contents={["분야 : 전체", "생활비", "등록금", "기타"]}></Dropdown>
        <div className='w-2'></div>
        <Dropdown contents={["최신순", "마감임박순", "인기순"]}></Dropdown>
    </div>
    <List></List>
    </>
    )
}
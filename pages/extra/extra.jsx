import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'

export default function extra() {
    return(
    <>
    <div className='flex my-2'>
        <Dropdown contents={["분야 : 전체", "서포터즈", "해외봉사/탐방", "국내봉사", "마케터", "기자단", "기타"]}></Dropdown>
        <div className='w-2'></div>
        <Dropdown contents={["최신순", "마감임박순", "인기순"]}></Dropdown>
    </div>
    <List></List>
    </>
    )
}
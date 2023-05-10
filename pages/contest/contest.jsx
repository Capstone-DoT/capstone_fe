import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'

export default function contest() {
    return(
    <>
    <div className='flex my-2'>
        <Dropdown contents={["분야 : 전체", "기획/아이디어", "광고/마케팅", "사진/영상/UCC", "디자인/미술/공예", "기타"]}></Dropdown>
        <div className='w-2'></div>
        <Dropdown contents={["최신순", "마감임박순", "인기순"]}></Dropdown>
    </div>
    <List></List>
    </>
    )
}
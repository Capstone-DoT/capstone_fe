import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'
import Search from '@/components/Searchbar'

export default function result() {
    return(
    <>
    <h1 className="font-bold text-2xl text-black mb-2 ">검색결과</h1>
    <Search className=""></Search>
    <div className='flex mt-2'>
      <Dropdown contents={["전체", "장학금", "대외활동", "공모전"]}></Dropdown>
      <div className='w-2'></div>
      <Dropdown contents={["최신순", "마감임박순", "인기순"]}></Dropdown>
    </div>
    <List></List>
    </>
    )
}
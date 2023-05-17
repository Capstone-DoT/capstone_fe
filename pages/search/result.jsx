import List from '@/components/List_search'
import Select from '@/components/SelectSort'
import Search from '@/components/Searchbar'

export default function result() {
  return (
    <>
      <h1 className="font-bold text-2xl text-black mb-4 ">검색결과</h1>
      <Search className=""></Search>
      <div className='flex mt-4'>
        <Select contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
        <div className='w-2'></div>
        <Select contents={["최신순", "마감임박순", "인기순"]}></Select>
      </div>
      <List></List>
    </>
  )
}
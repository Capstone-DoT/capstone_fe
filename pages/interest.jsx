import { useState } from 'react'
import List from '@/components/List_interest'
import Select from '@/components/SelectSort'

export default function interest(props) {
  const [ordering, setOrdering] = useState("view_num")
  const [type, setType] = useState("all")

  return (
    <>
      <h1 className="font-extrabold text-2xl text-black m-2 pb-2">관심목록</h1>
      <div className='flex'>
        <Select setType={setType} contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
        <div className='w-2'></div>
        <Select setOrdering={setOrdering} contents={["인기순", "최근 담은 순", "최신순", "마감임박순"]}></Select>
      </div>
      <List ordering={ordering} type={type} ></List>
    </>
  )
}
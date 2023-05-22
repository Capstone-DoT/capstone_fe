import List from '@/components/List_search'
import Select from '@/components/SelectSort'
import Search from '@/components/Searchbar'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function result() {
  const router = useRouter()
  const [ordering, setOrdering] = useState("createdAt")
  const [type, setType] = useState("all")
  return (
    <>
      <h1 className="font-bold text-2xl text-black mb-4 ">검색결과</h1>
      <Search initValue={router.query.search} />
      <div className='flex mt-4'>
        <Select setType={setType} contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
        <div className='w-2'></div>
        <Select setOrdering={setOrdering} contents={["최신순", "마감임박순", "인기순"]}></Select>
      </div>
      <List ordering={ordering} type={type} search={router.query.search}></List>
    </>

  )
}
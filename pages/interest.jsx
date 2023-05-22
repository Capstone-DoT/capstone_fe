import { useState } from 'react'
import List from '@/components/List'
import Select from '@/components/SelectSort'

export default function interest() {

  return (
    <>
      <h1 className="font-extrabold text-2xl text-black m-2 pb-2">관심목록</h1>
      <div className='flex'>
        <Select contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
        <div className='w-2'></div>
        <Select contents={["최근 담은 순", "최신순", "마감임박순", "인기순"]}></Select>
      </div>
      <List></List>
    </>
  )
}
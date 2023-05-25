import { useState } from 'react'
import List from '@/components/List_ai'
import Select from '@/components/SelectSort'

export default function interest() {


    return (
        <>
            <h1 className="font-extrabold text-2xl text-black m-2 ">AI 맞춤 정보</h1>
            <span className='ml-2 font-medium text-sm text-gray-dark'>관심목록에 담긴 정보를 기반으로 추천됩니다 !</span>
            <div className='flex mt-2'>
                <Select contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
                <div className='w-2'></div>
                <Select contents={["최신순", "마감임박순", "인기순"]}></Select>
            </div>
            {/* <List></List> */}
        </>
    )
}
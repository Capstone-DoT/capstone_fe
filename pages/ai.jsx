import { useState } from 'react'
import List from '@/components/List_recommend'
import Select from '@/components/SelectSort'

export default function interest() {
    const [ordering, setOrdering] = useState("createdAt")
    const [type, setType] = useState("all")

    return (
        <>
            <h1 className="font-extrabold text-2xl text-black m-2 ">AI 맞춤 정보</h1>
            <span className='ml-2 font-medium text-sm text-gray-dark'>관심목록에 담긴 정보를 기반으로 추천됩니다 !</span>
            <div className='flex mt-2'>
                <Select setType={setType} contents={["전체", "장학금", "대외활동", "공모전"]}></Select>
            </div>
            <List ordering={ordering} type={type}></List>
        </>
    )
}
import List from '@/components/List'
import Select from '@/components/SelectSort'
import Filter from '@/components/Filter'
import { useState } from 'react'

export default function scholar(props) {
    const contents = ["장학금", "대출지원", "근로장학", "기숙사/주거지원", "장학프로그램", "연수/연구장학", "취업연계/산학장학", "기타장학"]
    const [type, setType] = useState([])
    const [ordering, setOrdering] = useState("createdAt")
    const [search, setSearch] = useState("all")

    return (
        <>
            <Select setOrdering={setOrdering} contents={["최신순", "마감임박순", "인기순"]} ></Select>
            <div className='flex flex-wrap mt-3'>
                {contents && contents.map(content => {
                    return <Filter setType={setType} type={type} content={content} />
                })}
            </div>
            <List ordering={ordering} type={type} search={search} ></List>
        </>
    )
}
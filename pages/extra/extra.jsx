import List from '@/components/List'
import Select from '@/components/SelectSort'
import Filter from '@/components/Filter'
import { useState } from 'react'


export default function extra(props) {
    const contents = ["여행/호텔/항공", "언론/미디어", "문화/역사", "행사/페스티벌", "교육", "디자인/사진/예술/영상", "경제/금융", "경영/컨설팅/마케팅", "정치/사회/법률", "체육/헬스", "의료/보건", "뷰티/미용/화장품", "과학/공학/기술/IT", "요리/식품", "창업/자기계발", "환경/에너지", "콘텐츠", "사회공헌/교류", "유통/물류", "기타"]
    const [type, setType] = useState([])
    const [ordering, setOrdering] = useState("view_num")
    const [search, setSearch] = useState("all")
    const [pageno, setPageno] = useState(1)

    return (
        <>
            <Select setOrdering={setOrdering} contents={["인기순", "마감임박순", "최신순"]} ></Select>
            <div className='flex flex-wrap mt-3'>
                {contents && contents.map(content => {
                    return <Filter setType={setType} type={type} content={content} />
                })}
            </div>
            <List ordering={ordering} type={type} search={search} pageno={pageno}></List>
        </>
    )
}
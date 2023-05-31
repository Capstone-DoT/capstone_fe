import List from '@/components/List'
import Select from '@/components/SelectSort'
import Filter from '@/components/Filter'
import { useState } from 'react'

export default function contest() {
    const contents = ["기획/아이디어", "광고/마케팅", "사진/영상/UCC", "디자인/순수미술/공예", "네이밍/슬로건", "캐릭터/만화/게임", "건축/건설/인테리어", "과학/공학", "예체능/패션", "전시/페스티벌", "문학/시나리오", "해외", "학술", "창업", "기타"]
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
import List from '@/components/List_contest'
import Select from '@/components/SelectSort'
import Filter from '@/components/Filter'

export default function contest() {
    const contents = ["기획/아이디어", "광고/마케팅", "사진/영상/UCC", "디자인/순수미술/공예", "네이밍/슬로건", "캐릭터/만화/게임", "건축/건설/인테리어", "과학/공학", "예체능/패션", "전시/페스티벌", "문학/시나리오", "해외", "학술", "창업", "기타"]
    return (
        <>
            <Select contents={["최신순", "마감임박순", "인기순"]}></Select>
            <div className='flex flex-wrap mt-3'>
                {contents && contents.map(content => {
                    return <Filter content={content} />
                })}
            </div>
            <List></List>
        </>
    )
}
import List from '@/components/List_scholar'
import Select from '@/components/SelectSort'

export default function scholar() {

    return (
        <>
            <div className='flex my-2'>
                <Select contents={["최신순", "마감임박순", "인기순"]}></Select>
            </div>
            <List></List>
        </>
    )
}
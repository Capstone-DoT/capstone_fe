import { useState } from 'react'
import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'

export default function interest() {
    const [select, setSelect] = useState()
    const [selectSytle, setSelectStyle] = useState('mt-3')

  // if (content === select) {
    //   setSelectStyle('mt-3 font-bold text-black')
    // }
    // else setSelectStyle('mt-3')

  const changeSelect = (e) => {
    let newSelect = e.target.id
    setSelect(newSelect)
  }

    return(
    <>
    <h1 className="font-extrabold text-2xl text-black m-2 pb-2">관심목록</h1>
    <div className='flex'>
        <Dropdown contents={["전체", "장학금", "대외활동", "공모전"]}></Dropdown>
        <div className='w-2'></div>
        <Dropdown contents={["최근 담은 순", "최신순", "마감임박순", "인기순"]}></Dropdown>
    </div>
    <List></List>
    </>
    )
}
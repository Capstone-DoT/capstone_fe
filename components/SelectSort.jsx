import {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function test(props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { contents } = props
  const [select, setSelect] = useState(contents[0])
  const [selectSytle, setSelectStyle] = useState('cursor-pointer hover:font-bold')

  const changeSelect = (e) => {
    let newSelect = e.target.id
    setSelect(newSelect)
    setIsOpen(false);
  }

  return (
    <>
    <select className="bg-gray-50 cursor-pointer border text-[#808080] font-bold border-gray-dark h-10 w-min text-sm rounded-2xl focus:ring-0 focus:border-gray-dark block">
      {contents && contents.map((content, idx) => (
        <option key={idx} value={content} onClick={changeSelect} className={selectSytle}>
          {content}
        </option>
      ))}
    </select>
    </>
  )
}
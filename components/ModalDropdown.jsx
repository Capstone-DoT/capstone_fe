import {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function test(props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { contents } = props
  const [select, setSelect] = useState(contents[0])
  const [selectSytle, setSelectStyle] = useState('mt-3 cursor-pointer hover:font-bold')

  // if (content === select) {
    //   setSelectStyle('mt-3 font-bold text-black')
    // }
    // else setSelectStyle('mt-3')

  const changeSelect = (e) => {
    let newSelect = e.target.id
    setSelect(newSelect)
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <button onClick={openModal}
    className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 mt-2 border-gray-dark'
    ><span className='mr-2 self-center text-sm text-gray-dark font-bold'>{select}</span>
    <svg className='w-4 h-4 self-center' fill="none" stroke="orange" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    </button>
    <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // min-[821px] : pc버전 css
        className="fixed bottom-0 w-full border-t border-gray bg-white rounded-t-2xl z-60 
        min-[821px]:w-80 min-[821px]:left-[33%] min-[821px]:top-[40%] min-[821px]:bottom-[35%] min-[821px]:rounded-lg "
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }
        }}>
        <svg onClick={closeModal}
          className="w-8 h-8 absolute right-4 top-3" fill="none" stroke="#9CA3AF" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      
      <ul className='ml-8 mt-10 mb-10 text-gray-dark'>
        {contents && contents.map((content, idx) => (
          <li key={idx} id={content} onClick={changeSelect} className={selectSytle}>
            {content}
          </li>
        ))}
      </ul>
    </Modal>
    </>
  )
}
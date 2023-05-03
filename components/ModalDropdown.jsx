import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function test() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <button onClick={openModal}
    className='flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark'
    ><span className='mr-2 self-center text-sm text-gray-dark font-bold'>전체</span>
    <svg className='w-4 h-4 self-center' fill="none" stroke="orange" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    </button>
    <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // min-[821px] : pc버전 css
        className="fixed bottom-0 w-full border-t border-gray bg-white rounded-t-2xl z-60 
        min-[821px]:w-80 min-[821px]:left-[33%] min-[821px]:top-[40%] min-[821px]:bottom-[30%] min-[821px]:rounded-lg"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }
        }}>
      <button onClick={closeModal}>close</button>
      
      <ul className='ml-4 mt-4 mb-6'>
        <li>장학금</li>
        <li>대외활동</li>
        <li>공모전</li>
      </ul>
    </Modal>
    </>
  )
}
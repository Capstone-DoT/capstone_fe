import { useState } from "react"

export default function filterbtn(props) {
    const { content } = props
    const [filter, setFilter] = useState(false)
    const [style, setStyle] = useState('flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark min-w-max mb-2 mr-1 text-[10pt] text-gray-dark font-bold')

    function onFilter() {
        if (filter) {
            setFilter(false)
            setStyle('flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark min-w-max mb-2 mr-1 text-[10pt] text-gray-dark font-bold')
        }
        else {
            setFilter(true)
            setStyle('flex border h-8 rounded-2xl pl-4 pr-2 py-1 min-w-max mb-2 mr-1 text-[10pt] text-white bg-orange font-bold')
        }
    }

    return (
        <>
            <button onClick={onFilter} className={style}>
                <span className='mr-2 self-center'>{content}</span>
            </button>
        </>
    )
}
import { use, useState } from "react"

export default function filterbtn(props) {
    const { content } = props
    const [style, setStyle] = useState('flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark min-w-max mb-2 mr-1 text-[10pt] text-gray-dark font-bold')

    function onFilter() {
        var index = props.type?.findIndex(cont => cont === content)
        if (index !== -1) {
            props.type?.splice(index, 1)
            props.setType([...props.type])
            setStyle('flex border h-8 rounded-2xl pl-4 pr-2 py-1 border-gray-dark min-w-max mb-2 mr-1 text-[10pt] text-gray-dark font-bold')
        }
        else {
            props.setType([content, ...props.type])
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
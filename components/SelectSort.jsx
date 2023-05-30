export default function test(props) {
  const { contents } = props

  const handleChangeSelect = (e) => {

    if (e.target.value === "최신순") {
      props.setOrdering("createdAt")
    }
    else if (e.target.value === "마감임박순") {
      props.setOrdering("dday")
    }
    else if (e.target.value === "인기순") {
      props.setOrdering("view_num")
    }
    else if (e.target.value === "최근 담은 순") {
      props.setOrdering("new")
    }
    else if (e.target.value === "전체") {
      props.setType("all")
    }
    else if (e.target.value === "장학금") {
      props.setType("scholarship")
    }
    else if (e.target.value === "대외활동") {
      props.setType("activity")
    }
    else if (e.target.value === "공모전") {
      props.setType("contest")
    }
  }


  return (
    <>
      <select onChange={handleChangeSelect} className="bg-gray-50 cursor-pointer border text-[#808080] font-bold border-gray-dark h-10 w-min text-sm rounded-2xl focus:ring-0 focus:border-gray-dark block">
        {contents && contents.map((content, idx) => (
          <option key={idx} value={content}>
            {content}
          </option>
        ))}
      </select>
    </>
  )
}
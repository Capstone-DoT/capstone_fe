import Search from "@/components/Searchbar"
import Dropdown from "@/components/ModalDropdown"
import List from "@/components/List"

export default function search_result() {
    return(
      <>
      <div className="pt-16 px-2 min-[821px]:w-1/2 min-[821px]:ml-64 max-[820px]:w-full max-[820px]:px-5 z-0">
        <h1 className="font-bold text-2xl text-black mb-2">검색결과</h1>
        <Search></Search>
        <Dropdown></Dropdown>
        <div className='w-2'></div>
        <Dropdown></Dropdown>
        <List></List>
      </div>
  </>
    )
}
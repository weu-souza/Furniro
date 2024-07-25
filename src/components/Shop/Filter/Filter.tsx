import FilterIcon from "../../../assets/icons/shop/FilterIcon";
import CiGridBigRound from "../../../assets/icons/shop/CiGridBigRound";
import ViewList from "../../../assets/icons/shop/ViewList";
interface ItemListProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  categories:string[]
}
const Filter = ({ currentPage, itemsPerPage, totalItems,categories }: ItemListProps) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedFrom = indexOfFirstItem + 1;
  const displayedTo = Math.min(indexOfLastItem, totalItems);
  

  return (
    <div className="bg-cor-F9F1E7 h-20 flex flex-wrap flex-col md:flex-row justify-around">
      <div className="flex gap-5 items-center justify-center my-auto">
        <FilterIcon />
        <p className="font-Poppins font-normal text-xl text-black">Filter</p>
        <CiGridBigRound />
        <ViewList />
        <p className="font-Poppins font-normal text-base text-black">
          Showing {displayedFrom}–{displayedTo} of {totalItems} results
        </p>
      </div>
      <form className="flex gap-5 items-center justify-center my-auto">
        <label htmlFor="show" className="font-Poppins font-normal text-xl text-black">show</label>
        <select
          name=""
          id="show"
          className="font-Poppins font-normal text-xl text-cor-9F9F9F my-auto outline-none w-10 p-2 "
        >
          <option value="">8</option>
          <option value="">16</option>
          <option value="">32</option>
        </select>
        <label htmlFor="category" className="font-Poppins font-normal text-xl text-black">short by</label>
        <select name="" id="category" className="font-Poppins font-normal text-xl text-cor-9F9F9F my-auto outline-none  p-2">
          <option value="default">default</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </form> 
    </div>
  );
};

export default Filter;

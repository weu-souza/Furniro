interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  nextPage: () => void;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}


const Paginator = ({ itemsPerPage, totalItems, paginate, currentPage, nextPage}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-wrap pl-5 md:pl-0 gap-10">
      {pageNumbers.map(number => (
         <button key={number} onClick={() => paginate(number)}  className={currentPage === number?"font-Poppins font-normal text-xl text-white bg-cor-B88E2F py-3 px-6 rounded-lg":
         "font-Poppins font-normal text-xl text-black bg-cor-F9F1E7 py-3 px-6 rounded-lg"}>
         {number}
       </button>
        ))}
      <button onClick={nextPage} disabled={currentPage === pageNumbers.length} className="font-Poppins font-light text-xl text-black bg-cor-F9F1E7 py-3 px-6 rounded-lg">
        next
      </button>
    </div>
  );
};

export default Paginator;

import FilterIcon from '../../../assets/icons/shop/FilterIcon'
import CiGridBigRound from '../../../assets/icons/shop/CiGridBigRound'
import ViewList from '../../../assets/icons/shop/ViewList'

const Filter = () => {
  return (
    <div className='bg-cor-F9F1E7 h-20 flex flex-row justify-around'>
      <div className='flex gap-5 items-center justify-center my-auto'>
      
      <FilterIcon/>
      <p className='font-Poppins font-normal text-xl text-black'>Filter</p>
      <CiGridBigRound/>
      <ViewList/>
      <p className='font-Poppins font-normal text-base text-black'>Showing 1–16 of 32 results</p>
      </div>
      <div className='flex gap-5 items-center justify-center my-auto'>
      <p className='font-Poppins font-normal text-xl text-black'>show</p>
      <input type="text " className='font-Poppins font-normal text-xl text-cor-9F9F9F my-auto outline-none w-10 p-2'/>
      <p className='font-Poppins font-normal text-xl text-black'>short by</p>
      <input type="text" className='font-Poppins font-normal text-xl text-cor-9F9F9F my-auto outline-none w-24 p-2' />
      </div>
      </div>
    
  )
}

export default Filter

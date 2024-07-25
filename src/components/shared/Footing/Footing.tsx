
import TrophyIcon from '../../../assets/icons/IconsFooting/TrophyIcon'
import Guarantee from '../../../assets/icons/IconsFooting/Guarantee'
import Shipping from '../../../assets/icons/IconsFooting/Shipping'
import Support from '../../../assets/icons/IconsFooting/Support'

const Footing = () => {
  return (
    <div className=' bg-cor-F9F1E7 md:h-[200px] flex flex-col md:flex-row  flex-wrap justify-around p-6 gap-5'>
      <div className='my-auto flex flex-row gap-4'>
        <TrophyIcon/>
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>High Quality</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>crafted from top materials</p>
        </div>
      </div>
      <div className='my-auto flex flex-row gap-4'>
        <Guarantee/>
       <div>
       <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>Warranty Protection</h1>
       <p className='font-Poppins font-medium text-xl text-cor-898989'>Over 2 years</p>
       </div>
      </div >
      <div className='my-auto flex flex-row gap-4'>
        <Shipping/>
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>Free Shipping</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>Order over 150 $</p>
        </div>
      </div>
      <div className='my-auto flex flex-row gap-4'>
        <Support/>
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>24 / 7 Support</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>Dedicated support</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footing



const Footing = () => {
  return (
    <div className=' bg-cor-F9F1E7 md:h-[200px] flex flex-col md:flex-row  flex-wrap justify-around p-6 gap-5'>
      <div className='my-auto flex flex-row gap-4'>
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/IconsFooting/TrophyIcon.svg" alt="" />
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>High Quality</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>crafted from top materials</p>
        </div>
      </div>
      <div className='my-auto flex flex-row gap-4'>
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/IconsFooting/Guarantee.svg" alt="" />
       <div>
       <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>Warranty Protection</h1>
       <p className='font-Poppins font-medium text-xl text-cor-898989'>Over 2 years</p>
       </div>
      </div >
      <div className='my-auto flex flex-row gap-4'>
      <img
        src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/IconsFooting/Shipping.svg"
        alt=""
      />
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>Free Shipping</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>Order over 150 $</p>
        </div>
      </div>
      <div className='my-auto flex flex-row gap-4'>
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/IconsFooting/Support.svg" alt="" />
        <div>
        <h1 className='font-Poppins font-semibold text-2xl text-cor-242424'>24 / 7 Support</h1>
        <p className='font-Poppins font-medium text-xl text-cor-898989'>Dedicated support</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footing

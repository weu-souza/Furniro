import loading from "../../../assets/load.gif"
const Loading = () => {
  return (
    <div className=' flex w-full h-screen'>
      <img src={loading} className='object-cover w-full' alt="load" />
    </div>
  )
}

export default Loading

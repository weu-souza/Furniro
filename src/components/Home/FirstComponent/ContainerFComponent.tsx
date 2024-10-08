import img from '../../../assets/Img/imgBgHome.jpeg'
import Card from './Card'
const ContainerFComponent = () => {
  return (
    <div className='  bg-cover bg-bottom  pt-40 pb-32 flex justify-end items-center' style={{backgroundImage:`url(${img})`}}>
      <Card/>
    </div>
  )
}

export default ContainerFComponent

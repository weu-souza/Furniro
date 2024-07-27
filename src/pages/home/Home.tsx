
import ContainerFComponent from "../../components/Home/FirstComponent/ContainerFComponent"
import ContainerSComponent from "../../components/Home/secondComponent/ContainerSComponent";
import ContainerTComponent from "../../components/Home/thirdComponent/ContainerTComponent";
import Container4Component from "../../components/Home/fourthComponent/Container4Component";
import ShareYourSetup from "../../components/Home/fifthComponent/ShareYourSetup";


const Home = () => {

  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-14" >
      <ContainerFComponent />
      <ContainerSComponent />
      <ContainerTComponent /> 
      <Container4Component/>
      <ShareYourSetup />
      </div>

    </div>
  )
}

export default Home

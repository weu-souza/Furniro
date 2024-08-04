import Footing from "../../components/shared/Footing/Footing"
import Heading from "../../components/shared/Heading/Heading"

const About = () => {
  return (
    <div className="flex  flex-col gap-12 max-w-screen-xl mx-auto">
      <Heading />
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-images/no-tem-nada.jpg" alt="não tem nada" />
      <Footing />
    </div>
  )
}

export default About

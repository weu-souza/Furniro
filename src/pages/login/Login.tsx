
import LoginForm from "../../components/Login/LoginForm"

const Login = () => {
  return (
    <div className="flex flex-col gap-10 justify-between mt-32">
      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto">
      <div className="mx-auto">
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/logo_furniro.svg" alt="" />
      </div>
      <LoginForm/>
    </div>
    </div>
  )
}

export default Login

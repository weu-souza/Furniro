import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IRegister } from "../../Service/api/model/LoginModel";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../Service/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import LogoIcon from "../../assets/icons/logo_furniro"

const RegisterForm = () =>{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IRegister>();
    
      const onSubmit: SubmitHandler<IRegister> = (data, e) => {
        e?.preventDefault();
        handleRegister(data);
        if(auth){
            navigate("/")
        }
      };
    
      const handleRegister = async (data: IRegister) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const user = userCredential.user;
    
          await updateProfile(user, {
            displayName: `${data.firstName} ${data.lastName}`,
          });
    
          await setDoc(doc(db, "users", user.uid), {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          });
         
          console.log("User registered and added to Firestore");
         
        } catch (error) {
          console.error("Error registering user", error);
        }
      };
    
      return (
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8  w-[650px] shadow-2xl shadow-cor-shadow py-10 px-20 rounded-xl"
          >
            <label className="label flex flex-col gap-2">
              Email address
              <input
                className="input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Abc@def.com"
              />
            </label>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label className="label flex flex-col gap-2">
              Password
              <input
                className="input"
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
            </label>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
            <label className="label flex flex-col gap-2">
              First Name
              <input
                className="input"
                {...register("firstName", { required: "First name is required" })}
                placeholder="First Name"
              />
            </label>
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
            <label className="label flex flex-col gap-2">
              Last Name
              <input
                className="input"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
              />
            </label>
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
            <div className="flex flex-col gap-4 justify-between">
              <p className="flex gap-2 font-Poppins font-normal text-base self-end">
                Já tem uma conta?{" "}
                <Link to={"/Login"} className="text-cor-9F9F9F">
                  Login
                </Link>
              </p>
              <input
                type="submit"
                value={"Register"}
                className="py-3 px-20 bg-cor-B88E2F rounded-lg font-Poppins font-normal text-base text-white cursor-pointer"
              />
            </div>
          </form>
        </div>
      );
}

const Register = () => {
  return(
    <div className="flex flex-col gap-10 justify-between mt-10 pb-10">
      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto">
      <div className="mx-auto">
      <LogoIcon />
      </div>
      <RegisterForm />
    </div>
    </div>
  )
};

export default Register;

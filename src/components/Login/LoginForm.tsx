import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../Service/api/model/LoginModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../Service/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LoginForm = () => {
  const [signInWithGoogle, userEmail] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, userGoogle,] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = (data, e) => {
    e?.preventDefault();
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleLoginGoogle = () => {
    signInWithGoogle();

  };

  useEffect(()=>{
    if (userGoogle || userEmail) {
      navigate('/');
    }
  },[userGoogle,userEmail])
  

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
            className="input" type="password"
            {...register("password", { required: true })}
            placeholder="password"
          />
        </label>
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="flex  items-center justify-between">
          <input
            type="submit"
            value={"Login"}
            className="py-3 px-20 bg-cor-B88E2F rounded-lg font-Poppins font-normal text-base text-white  cursor-pointer"
          />
          <button
            type="button"
            className="bg-red-600 py-3 px-10  rounded-lg gap-2 font-Poppins font-normal text-base text-white"
            onClick={handleLoginGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

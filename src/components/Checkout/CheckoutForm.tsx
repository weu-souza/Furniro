import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { ICheckout } from "../../Service/api/model/CheckoutModel";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Service/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { ICep } from "../../Service/api/model/CepModel";

type CheckouType = {
  register: UseFormRegister<ICheckout>,
  errors:FieldErrors<ICheckout>
  setValue:UseFormSetValue<ICheckout>

}


export default function CheckoutForm({register, errors,setValue}:CheckouType) {
  const [user] =  useAuthState(auth);
  const displayName = user?.displayName;
  const [firstName, lastName] = displayName!.split(' ');
  const email = user?.email;
 const [cep,setCep] = useState<string>("")


const addUserDataInForm = () =>{
 if(user){
  setValue('firstName',firstName)
  setValue('lastName',lastName)
  setValue('email',email!)
 }
}
useEffect(()=>{
  addUserDataInForm()
},[])



useEffect(() => {
  const buscaCep = async () => {
    if (cep.length === 8) {
      
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
          throw new Error('Erro na busca do CEP');
        }
        const data: ICep = await response.json();
        setValue('street', data.logradouro);
        setValue('town', data.localidade);
        setValue('province', data.uf);
      } catch (error) {
        console.error(error);
      } 
    }
  };
  buscaCep();
}, [cep]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCep(e.target.value);
};


  return (   
       <div className="flex flex-col gap-2">
      <div className="flex gap-8">
        <label className="flex flex-col ">
          <span className="label">First Name</span>
          <input {...register("firstName", { required: true })} className="input" />
          {errors.firstName && <span className="text-red-500">This field is required</span>}
        </label>

        <label className="flex flex-col">
          <span className="label">Last name</span>
          <input {...register("lastName", { required: true })} className="input" />
          {errors.lastName && <span className="text-red-500">This field is required</span>}
        </label>
      </div>

      <label className="label" htmlFor="CompanyName">Company Name (Optional)</label>
      <input {...register("CompanyName")} id="CompanyName" className="input" />

      <label className="label" htmlFor="zipCode">ZIP code</label>
      <input {...register("zipCode", { required: true, onChange: handleChange })} id="zipCode" className="input" />
      {errors.zipCode && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="country">Country / Region</label>
      <input {...register("country", { required: true, value: "Brasil" })} id="country" className="input" />
      {errors.country && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="street">Street address</label>
      <input {...register("street", { required: true })} id="street" className="input" />
      {errors.street && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="town">Town / City</label>
      <input {...register("town", { required: true })} id="town" className="input" />
      {errors.town && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="province">Province</label>
      <input {...register("province", { required: true })} id="province" className="input" />
      {errors.province && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="addressSecond">Add-on address</label>
      <input {...register("addressSecond", { required: true })} id="addressSecond" className="input" />
      {errors.addressSecond && <span className="text-red-500">This field is required</span>}

      <label className="label" htmlFor="email">Email address</label>
      <input {...register("email", { required: true })} id="email" className="input" />
      {errors.email && <span className="text-red-500">This field is required</span>}

      <input className="input" {...register("additionalInformation", { required: true })} placeholder="Additional information" />
      {errors.additionalInformation && <span className="text-red-500">This field is required</span>}
      </div>
  );
}

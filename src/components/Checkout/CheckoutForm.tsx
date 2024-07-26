import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICheckout } from "../../Service/api/model/CheckoutModel";

type CheckouType = {
  register: UseFormRegister<ICheckout>,
  errors:FieldErrors<ICheckout>

}

export default function CheckoutForm({register, errors}:CheckouType) {

  return (   
      <div className="flex flex-col gap-2">
      <div className="flex gap-8">
        <label  className="flex flex-col ">
          <span className="label">First Name</span>
          <input
            {...register("firstName", { required: true })}
            className="input"
          />
          {errors.firstName && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>

        <label className="flex flex-col">
            <span className="label">Last name</span>
        <input {...register("lastName", { required: true })} className="input"/>
        {errors.lastName && (
          <span className="text-red-500">This field is required</span>
        )}
        </label>
        
      </div>

      <label className="label" htmlFor="CompanyName">Company Name (Optional)</label>
      <input {...register("CompanyName")} id="CompanyName" className="input"/>
      {errors.CompanyName && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="zipCode">ZIP code</label>
      <input {...register("zipCode", { required: true })} id="zipCode" className="input"/>
      {errors.zipCode && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="country">Country / Region</label>
      <input {...register("country", { required: true })} id="country" className="input"/>
      {errors.country && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="street">Street address</label>
      <input {...register("street", { required: true })} id="street" className="input"/>
      
      {errors.street && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="town">Town / City</label>
      <input {...register("town", { required: true })} id="town" className="input"/>
     
      {errors.town && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="province" className="label">Province</label>
      <input {...register("province", { required: true })} id="province" className="input"/>
      
      {errors.province && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="addressSecond" className="label">Add-on address</label>
      <input {...register("addressSecond", { required: true })} id="addressSecond" className="input"/>
      
      {errors.addressSecond && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="email" className="label">Email address</label>
      <input {...register("email", { required: true })} id="email" className="input"/>
      
      {errors.email && (
        <span className="text-red-500">This field is required</span>
      )}

      <input className="input"
        {...register("additionalInformation", { required: true })}
        placeholder="Additional information"
      />
      {errors.additionalInformation && (
        <span className="text-red-500">This field is required</span>
      )}

    </div>
  );
}

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  CompanyName: string;
  zipCode: string;
  country: string;
  street: string;
  town: string;
  province: string;
  addressSecond: string;
  email: string;
  additionalInformation: string;
};

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data,e) => {
    e?.preventDefault()
    console.log(data);
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex gap-8">
        <label  className="flex flex-col ">
          <span className="label">First Name</span>
          <input
            {...register("firstName", { required: true })}
            className="input"
          />
          {/* errors will return when field validation fails  */}
          {errors.firstName && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>

        <label className="flex flex-col">
            <span className="label">Last name</span>
        <input {...register("lastName", { required: true })} className="input"/>
        {/* errors will return when field validation fails  */}
        {errors.lastName && (
          <span className="text-red-500">This field is required</span>
        )}
        </label>
        
      </div>

      <label className="label" htmlFor="CompanyName">Company Name (Optional)</label>
      <input {...register("CompanyName")} id="CompanyName" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.CompanyName && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="zipCode">ZIP code</label>
      <input {...register("zipCode", { required: true })} id="zipCode" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.zipCode && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="country">Country / Region</label>
      <input {...register("country", { required: true })} id="country" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.country && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="street">Street address</label>
      <input {...register("street", { required: true })} id="street" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.street && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label" htmlFor="town">Town / City</label>
      <input {...register("town", { required: true })} id="town" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.town && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="province" className="label">Province</label>
      <input {...register("province", { required: true })} id="province" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.province && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="addressSecond" className="label">Add-on address</label>
      <input {...register("addressSecond", { required: true })} id="addressSecond" className="input"/>
      {/* errors will return when field validation fails  */}
      {errors.addressSecond && (
        <span className="text-red-500">This field is required</span>
      )}

      <label htmlFor="email" className="label">Email address</label>
      <input {...register("email", { required: true })} id="email" className="input"/>
      {/* errors will return when field validation fails  */}
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

      <button type="submit" className="border border-black px-12 py-4 rounded-xl font-Poppins font-normal text-xl text-black" >place order</button>
    </form>
  );
}

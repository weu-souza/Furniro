import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-9 w-full"
    >
      <label className="label flex flex-col gap-2">
        Your name
        <input
          className="input"
          {...register("firstName", { required: true })}
          placeholder="Abc"
        />
      </label>
      {errors.firstName && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label flex flex-col gap-2">
        Email address
        <input className="input" {...register("email", { required: true })} placeholder="Abc@def.com"/>
      </label>
      {errors.email && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="label flex flex-col gap-2">
        Subject
        <input className="input" placeholder="This is an optional" {...register("subject")} />
      </label>

      <label className="label flex flex-col gap-2">
        Message
        <textarea
          className="input h-32 align-text-top  resize-none"
          {...register("message", { required: true })}
          placeholder="Hi! i'd like to ask about"
        />
      </label>
      {errors.message && (
        <span className="text-red-500">This field is required</span>
      )}
      <input
        type="submit"
        value={"Submit"}
        className="py-3 px-20 bg-cor-B88E2F rounded-lg font-Poppins font-normal text-base text-white self-start"
      />
    </form>
  );
};

export default ContactForm;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema, FormData } from "./validation";
import Field from "./Field";
import { Options } from "./options";
import { ErrorMessage, SuccessMessage } from "./FormOutcome";
import { useContactMutation } from "../../../../../hooks/useContactMutation";

export default function ContactForm() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
  });
  const { mutate, isError, isPending, isSuccess } = useContactMutation(reset);

  const onSubmit = async (data: FormData) => {
    try {
      mutate(data);
      console.log(data);
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  return (
    <div className='lg:col-span-2'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
          Send us a message
        </h2>
        {isSuccess && <SuccessMessage />}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {isError && <ErrorMessage />}
          <Field
            field='Name'
            placeholder='Your name'
            errors={errors}
            {...register("Name")}
          />
          <Field
            field='Email'
            placeholder='your.email@example.com'
            errors={errors}
            {...register("Email")}
          />
          <Field
            field='Subject'
            type='select'
            errors={errors}
            options={Options}
            {...register("Subject")}
          />
          <Field
            field='Message'
            type='textarea'
            errors={errors}
            {...register("Message")}
          />

          <button
            type='submit'
            className='w-full bg-primary-900 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200'
            disabled={isPending}>
            {isPending ? " Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

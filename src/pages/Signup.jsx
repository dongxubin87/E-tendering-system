import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";

import { useSignup } from "../features/authentication/useSignup";

function Signup() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ company, email, password }) {
    signup(
      { company, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <div className="flex flex-col gap-6  opacity-80 h-80 mt-40 w-4xl  p-4 bg-cyan-50  rounded-2xl mx-auto ">
      <h2 className="text-5xl text-center">COMPANY</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3  ">
        <FormRow label="Company name: " error={errors?.company?.message}>
          <input
            className="border py-0.5 px-1.5 rounded-sm"
            type="text"
            id="company"
            disabled={isLoading}
            {...register("company", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Email address: " error={errors?.email?.message}>
          <input
            className="border py-0.5 px-1.5 rounded-sm"
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters): "
          error={errors?.password?.message}
        >
          <input
            className="border py-0.5 px-1.5 rounded-sm"
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat password: "
          error={errors?.passwordConfirm?.message}
        >
          <input
            className="border py-0.5 px-1.5 rounded-sm"
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <div className="flex gap-40 justify-center items-center">
          <button
            type="reset"
            onClick={reset}
            className="bg-[#D9D9D9] rounded-lg text-lg w-28 h-10"
          >
            Reset
          </button>
          <button
            disabled={isLoading}
            className="bg-[#D9D9D9] rounded-lg text-lg w-44 h-10"
          >
            Create new user
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/user";
import { toast } from "react-hot-toast";

function SignUp() {
  const { handleSubmit, register, formState } = useForm();

  const { errors } = formState;

  const navigate = useNavigate();

  const singUpMutation = useMutation({
    mutationFn: ({ userName, email, password, confirmPassword }) =>
      signUp(userName, email, password, confirmPassword),
    onSuccess: () => {
      toast.success("Account created, please log in to continue");
      navigate("/login");
    },
  });

  function handleSignUp(data) {
    console.log(data);
    const { userName, email, password, confirmPassword } = data;
    singUpMutation.mutate({ userName, email, password, confirmPassword });
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} noValidate>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-black-200 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="userName"
              placeholder="userName"
              {...register("userName", {
                required: {
                  value: true,
                  message: "Please enter username",
                },
              })}
            />
            <p className="text-red-600">{errors.userName?.message}</p>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter an email",
                },
              })}
            />
            <p className="text-red-600">{errors.email?.message}</p>

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter password",
                },
              })}
            />
            <p className="text-red-600">{errors.password?.message}</p>

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please enter confirm password",
                },
              })}
            />
            <p className="text-red-600">{errors.confirmPassword?.message}</p>

            <button
              disabled={singUpMutation.isLoading}
              type="submit"
              className="w-full text-center py-3 rounded bg-green bg-blue-500 text-black hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <p>
              {singUpMutation.isError ? (
                <p> {singUpMutation.error.message} </p>
              ) : (
                ""
              )}
            </p>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              to="/login"
              className="no-underline border-b border-blue text-blue"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;

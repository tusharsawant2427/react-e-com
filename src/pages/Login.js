import React, { useRef, useState } from "react";
import Users from "../users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const STORAGE_KEY = "login_user";
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [emailValidation, setEmailValidation] = useState({
    is_valid: true,
    validation_message: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    is_valid: true,
    validation_message: "",
  });

  const onClickLogin = (e) => {
    e.preventDefault();
    if (emailRef.current.value == "" && passwordRef.current.value == "") {
      setEmailValidation({
        is_valid: false,
        validation_message: "Email Required.",
      });
      setPasswordValidation({
        is_valid: false,
        validation_message: "Password Required.",
      });
    } else if (emailRef.current.value == "") {
      setEmailValidation({
        is_valid: false,
        validation_message: "Email Required.",
      });
    } else if (passwordRef.current.value == "") {
      setPasswordValidation({
        is_valid: false,
        validation_message: "Password Required.",
      });
    } else {
      let exists = Users.filter(
        (user) =>
          user.email === emailRef.current.value &&
          user.password === passwordRef.current.value
      );
      if (exists.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(exists[0]));
        navigate("/");
      } else {
        alert("Invalid user name and password");
      }
    }
  };

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mt-20">
        <form className="space-y-6" onSubmit={(e) => onClickLogin(e)}>
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none  ${
                emailValidation.is_valid === false
                  ? "border-red-300 focus:border-red-300 peer"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="name@company.com"
              ref={emailRef}
            />

            <p
              className={`mt-2 text-xs text-red-600 dark:text-red-400 ${
                emailValidation.is_valid === false ? "block" : "hidden"
              }`}
            >
              <span className="font-medium">
                {emailValidation.validation_message}
              </span>
            </p>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none  ${
                passwordValidation.is_valid === false
                  ? "border-red-300 focus:border-red-300 peer"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              ref={passwordRef}
            />
            <p
              className={`mt-2 text-xs text-red-600 dark:text-red-400 ${
                passwordValidation.is_valid === false ? "block" : "hidden"
              }`}
            >
              <span className="font-medium">
                {passwordValidation.validation_message}
              </span>
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

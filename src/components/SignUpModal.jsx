// components/LoginModal.js
"use client";
import { useState } from "react";

const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}> Sign up</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ">
          <div className="flex flex-col p-8 text-black bg-white rounded-lg justify-items-center w-[24rem]">
            <div className="flex justify-between">
              <h1 className="text-2xl font-medium">Sign up</h1>
              {/* x-mark */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 cursor-pointer"
                onClick={toggleModal}
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              id="nameId"
              placeholder="Full Name"
              className="px-4 py-2 mt-6 font-normal border rounded-lg outline-none focus:border-green-500 focus:border-2"
            />
            <input
              type="email"
              name="email"
              id="emailId"
              placeholder="Email"
              className="px-4 py-2 mt-6 font-normal border rounded-lg outline-none focus:border-green-500 focus:border-2"
            />
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                name="termsAndCondition"
                id="termsAndConditionId"
                className="mt-1 border-2 border-gray-500"
              />
              <h1 className="ml-2 text-xs text-gray-500">
                I agree to Zomato's Terms of Service, Privacy Policy and Content
                Policies
              </h1>
            </div>

            <button className="flex justify-center w-full px-8 py-2 mt-4 text-white bg-red-500 border rounded-lg outline-none">
              Create account
            </button>
            <h1 className="flex justify-center mt-3">or</h1>
            <button className="flex items-center justify-center w-full h-1 px-8 py-5 mt-3 border rounded-lg ">
              <img src="/google.png" alt="google" className="w-4 h-4 mr-2" />
              <h1 className="text-sm font-normal">Sign in with Google</h1>
            </button>
            <hr className="mt-6" />
            <div className="flex items-center mt-6 text-sm">
              <h1>Already have and account?</h1>
              <span className="ml-2 text-red-500 ">Log in</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;

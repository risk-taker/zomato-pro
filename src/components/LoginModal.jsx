// components/LoginModal.js
"use client";
import Image from "next/image";
import { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Log in</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ">
          <div className="flex flex-col p-8 text-black bg-white rounded-lg justify-items-center w-[24rem]">
            <div className="flex justify-between">
              <h1 className="text-2xl font-medium">Login</h1>
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
            {/* focus is not working */}
            <div
              className="flex items-center border border-gray-400 rounded-lg w-full py-[8px] px-4 focus:border-green-600 focus:border-2 mt-8"
              tabIndex="0"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/indian-flag.png"
                  alt="indian-flag"
                  className="w-[25px] h-[17px] "
                />
                <h1>+91</h1>
                <h1 className="mr-3">|</h1>
              </div>
              <input
                type="tel"
                id="phone"
                maxlength="10"
                minlength="10"
                class="outline-none text-md text-gray-900 ml-5 font-normal"
                placeholder="Phone"
              />
            </div>
            <button className="flex justify-center w-full px-8 py-2 mt-6 text-white bg-red-500 border rounded-lg outline-none">
              Send One Time Password
            </button>
            <h1 className="flex justify-center">or</h1>
            <button className="flex items-center justify-center w-full h-1 px-8 py-5 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-red-500 mr-2"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <h1 className="text-sm font-normal">Continue with Email</h1>
            </button>
            <button className="flex items-center justify-center w-full h-1 px-8 py-5 mt-6 border rounded-lg ">
              <img src="/google.png" alt="google" className="w-4 h-4 mr-2" />
              <h1 className="text-sm font-normal">Sign in with Google</h1>
            </button>
            <hr className="mt-6" />
            <div className="flex items-center mt-6 text-sm">
              <h1>New to Zomato?</h1>
              <span className="ml-2 text-red-500 ">Create account</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;

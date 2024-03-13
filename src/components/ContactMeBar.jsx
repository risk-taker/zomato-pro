"use client";
import React, { useState } from "react";

const ContactMeBar = () => {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <div className="flex justify-between w-2/5">
      <div>
        <img
          src="/phone-image.png"
          alt="phone-image"
          className="h-48 w-44 mt-28"
        />
      </div>
      <div className="ml-8">
        <h1 className="mt-16 text-4xl font-medium">Get the Zomato app</h1>
        <h1 className="font-light mt-7 text-slate-700">
          We will send you a link, open it on your phone to download the app
        </h1>
        <div className="flex items-center mt-4">
          <input type="radio" name="email" id="emailId" /> email
          <input
            type="radio"
            name="phone"
            id="phoneId"
            className="ml-10"
          />{" "}
          phone
        </div>
        <div className="mt-5">
          {isEmail ? (
            <input
              type="email"
              name="emailNo"
              id="emaiNoId"
              placeholder="Email"
              className="p-3 font-light text-red-500 outline-none w-72"
            />
          ) : (
            <input type="number" name="phoneNo" id="phoneNoId" />
          )}

          <button className="p-2 ml-4 text-white bg-red-500 rounded-md">
            Share App Link
          </button>
        </div>
        <h1 className="mt-6 text-xs font-light text-slate-600">
          Download from app
        </h1>
        <div className="flex items-center mt-4">
          <img
            src="googleplay-image.png"
            alt="google-play"
            className="w-32 h-10"
          />
          <img src="appstore.png" alt="app-store" className="w-32 h-10 ml-5" />
        </div>
      </div>
    </div>
  );
};

export default ContactMeBar;

import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="container pt-12 mx-auto xl:w-3/5 md:w-full">
      <h1 className="text-4xl italic font-bold">zomato</h1>
      <div className="flex justify-between pb-10 mt-10">
        <div className="font-light ">
          <h1 className="font-medium tracking-widest">ABOUT ZOMATO</h1>
          <div className="grid gap-1 mt-2 text-sm">
            <h1>Who We Are</h1>
            <h1>Blog</h1>
            <h1>Work With Us</h1>
            <h1>Investor Relations</h1>
            <h1>Report Fraud</h1>
            <h1>Press Kit</h1>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="mt-2 font-light">
          <h1 className="font-medium tracking-widest">ZOMAVERSE</h1>
          <div className="grid gap-1 mt-2 text-sm">
            <h1>Zomato</h1>
            <h1>Blinkit</h1>
            <h1>Feeding india</h1>
            <h1>Hyperpure</h1>
            <h1>Zomaland</h1>
          </div>
        </div>
        <div className="mt-2 font-light">
          <h1 className="font-medium tracking-widest">FOR RESTAURANTS</h1>
          <div className="grid gap-1 mt-2 text-sm">
            <h1>Partner With Us</h1>
            <h1>Apps For You</h1>
          </div>
        </div>
        <div className="mt-2 font-light">
          <h1 className="font-medium tracking-widest">LEARN MORE</h1>
          <div className="grid gap-1 mt-2 text-sm">
            <h1>Privacy</h1>
            <h1>Security</h1>
            <h1>Terms</h1>
            <h1>Sitemap</h1>
          </div>
        </div>
        <div className="mt-2 font-light">
          <h1 className="font-medium tracking-widest">SOCIAL LINKS</h1>
          <div className="grid gap-1 mt-2 text-sm">
            <div className="flex justify-between">
              <FaLinkedin className="size-5" />
              <FaInstagramSquare className="size-5" />
              <FaTwitterSquare className="size-5" />
              <FaYoutube className="size-5" />
              <FaFacebook className="size-5" />
            </div>
            <img
              src="appstore.png"
              alt="appstore"
              className="w-32 h-auto mt-2"
            />
            <img
              src="googleplay-image.png"
              alt="googleplay"
              className="w-32 h-auto mt-2"
            />
          </div>
        </div>
      </div>
      <hr className="bg-slate-400 h-[2px]" />
      <h1 className="pb-6 mt-4 text-sm font-light">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
        rights reserved.
      </h1>
    </div>
  );
};

export default FooterComponent;

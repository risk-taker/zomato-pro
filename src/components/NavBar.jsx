import SearchBox from "./SearchBox";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')`,
        }}
        className="w-full h-[32rem]  "
      >
        <nav className="container mx-auto xl:w-3/5 md:w-full">
          <div className="flex justify-between">
            <div className="flex items-center mt-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <div className="ml-1 text-xs text-white ">Get the App</div>
            </div>
            <div className="flex justify-between w-1/2 mt-3 font-light text-white">
              <div>Investor Relations</div>
              <div>Add restaurant</div>
              <div>Log in</div>
              <div>Sign up</div>
            </div>
          </div>
        </nav>
        <SearchBox />
      </div>
    </>
  );
};

export default NavBar;

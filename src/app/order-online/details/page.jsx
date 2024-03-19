import React from "react";

const page = () => {
  return (
    <div className="container mx-auto xl:w-3/5 md:w-full">
      <div className="flex justify-between mt-4">
        <div>
          <h1 className="mb-3 text-lg">Menu</h1>
          <div className="flex gap-4">
            <img src="/menu.png" alt="menu" className="w-[223px]" />
            <img src="/menu2.png" alt="menu" className="w-[223px]" />
          </div>
        </div>
        <div className="p-3 border rounded-lg shadow-lg">
          <h1 className="text-lg">Call</h1>
          <h1 className="mt-1 text-red-500">+91 8068976141</h1>
          <h1 className="mb-2 text-lg font-normal">Direction</h1>
          <div>
            <img src="/map.png" alt="map" className="w-[280px]" />
          </div>
          <h1 className="my-3 text-gray-600">
            CC/25, P.C Colony, Lohiya Nagar, Near <br /> Patliputra Sports
            Complex, Near Gyatri <br /> Mandir, Kankarbagh, Patna
          </h1>
          <div className="flex gap-3">
            <div className="flex items-center w-20 h-8 gap-1 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
              <button>Copy</button>
            </div>
            <div className="flex items-center w-24 h-8 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-red-500 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z"
                  clip-rule="evenodd"
                />
              </svg>
              <button>Direction</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

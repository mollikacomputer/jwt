import React from "react";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center my-16">
      <div className=" card w-96 bg-base-100 shadow-xl">
      <h2 className="text-2xl ">Login Page</h2>
        <div className="card-body">
          <label class="relative block">
            <span class="sr-only">Name</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                {/* <!-- ... --> */}
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Email"
              type="text"
              name="name"
            />
          </label>
          <label class="relative block">
            <span class="sr-only">email</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                {/* <!-- ... --> */}
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Password"
              type="text"
              name="name"
            />
          </label>
          <button className="btn btn-primary"> Submit button</button>
          <button className="btn btn-primary"> Submit button 2</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

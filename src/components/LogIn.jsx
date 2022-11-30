import React from "react";

const LogIn = () => {
  return (
    <div
      name="login"
      className="w-full h-screen bg-[#FAEBAD] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8ab5f230-e87e-4cb0-983c-66c68f01ca61"
        className="flex flex-col max-w-[600px] w-full  bg-[#eb5031af] p-4"
      >
        <div className="pb-8">
          <p className="text-4xl font-semibold flex justify-center items-center px-4">
            Employee Login
          </p>
        </div>
        <input
          className="my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="p-2"
          name="password"
          rows="10"
          placeholder="Password"
        ></input>
        <button className="border-2 group border-gray-800 px-4 py-3 my-8 mx-auto flex items-center hover:bg-white hover:border-white">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default LogIn;

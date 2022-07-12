import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-auto">
      <div className="this-container m-5 flex flew-row items-center justify-center relative">
        <div className="flex flex-row space-x-3 absolute left-0">
          <h1 className="bg-yellow-custom text-white py-1 px-3 font-bold rounded-[16px]">
            S
          </h1>
          <div className="text-md text-yellow-custom font-normal">
            <p>Serba</p>
            <p>Serbi</p>
          </div>
        </div>
        <p className="inline-block">Lorem, ipsum.</p>
        <p className="inline-block">Lorem, ipsum.</p>
      </div>
    </header>
  );
};

export default Navbar;

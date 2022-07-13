import React, { useEffect, useState } from "react";

const Navbar = () => {
  let hamburger;
  let listNav;
  const [visible, setVisible] = useState(false);

  const myStyle = `nav-list pt-3 flex flex-col lg:flex-row text-black pl-1 max-h-0 lg:max-h-full lg:visible mt-1 lg:mt-0 lg:space-x-3 overflow-hidden lg:overflow-visible transition-all duration-500 ${
    visible ? "visible" : "invisible"
  }`;

  const handleNavbar = () => {
    hamburger.classList.toggle("hamburger-active");
    if (listNav.classList.contains("visible")) {
      setVisible(false);
      listNav.removeAttribute("style");
    } else {
      setVisible(true);
      listNav.style.maxHeight = listNav.scrollHeight + 10 + "px";
    }
  };

  useEffect(() => {
    listNav = document.querySelector("#list-nav");
    hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", handleNavbar);
  }, []);

  return (
    <header className="w-full h-auto">
      <div className="this-container m-5 flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center relative">
        <button
          className="block lg:hidden absolute right-2"
          type="button"
          id="hamburger"
        >
          <span className="hamburger-line transition-all duration-300 origin-top-left"></span>
          <span className="hamburger-line transition-all duration-300"></span>
          <span className="hamburger-line transition-all duration-300 origin-bottom-left"></span>
        </button>
        <div className="pl-2 lg:pl-0 flex flex-row space-x-3 static lg:absolute left-0">
          <h1 className="bg-yellow-custom text-white py-1 px-3 font-bold rounded-[16px]">
            S
          </h1>
          <div className="text-md text-yellow-custom font-normal">
            <p>Serba</p>
            <p>Serbi</p>
          </div>
        </div>
        <ul className={`${myStyle}`} id="list-nav">
          <li className="inline-block text-md mx-3 text-yellow-custom">Home</li>
          <li className="inline-block text-md mx-3">Articles</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

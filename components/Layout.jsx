import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto pt-12">{children}</div>
    </>
  );
};

export default Layout;

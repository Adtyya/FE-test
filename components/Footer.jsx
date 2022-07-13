import React from "react";
import Layout from "./Layout";
import Icon from "../lib/Icon";

const Footer = () => {
  return (
    <Layout>
      <div className="footer-top mt-16">
        <div className="flex flex-row items-center w-1/4 h-max">
          <h1 className="bg-yellow-custom text-white py-1 px-3 font-bold rounded-[16px]">
            S
          </h1>
          <p className="pl-2 text-yellow-custom font-normal">SerbaSerbi</p>
        </div>
        <div className="flex flex-row justify-start space-x-10 w-3/4">
          <div className="flex flex-col w-auto">
            <h3 className="pb-4 font-semibold text-lg text-black text-opacity-70">
              Menu
            </h3>
            <p className="text-sm paragh">Home</p>
          </div>
          <div className="flex flex-col w-auto">
            <h3 className="pb-4 font-semibold text-lg text-black text-opacity-70">
              Bantuan
            </h3>
            <p className="text-sm mb-1 paragh">Pusat Bantuan</p>
            <p className="text-sm mb-1 paragh">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-btm">
        <p className="text-sm font-semibold text-black text-opacity-60">
          &copy; 2022 Sislog. All Rights Reserved
        </p>
        <div className="flex space-x-4 mb-3">
          {Icon.map((el, i) => (
            <img src={el.path} alt="icon" key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Footer;

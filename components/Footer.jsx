import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout>
      <div className="w-full flex flex-row pb-12">
        <div className="flex flex-row items-center w-1/4 h-max">
          <h1 className="bg-yellow-custom text-white py-1 px-3 font-bold rounded-[16px]">
            S
          </h1>
          <h3 className="pl-2 text-yellow-custom font-semibold">SerbaSerbi</h3>
        </div>
        <div className="flex flex-row justify-start space-x-10 w-3/4">
          <div className="flex flex-col w-auto">
            <h3 className="pb-4 font-semibold text-black text-opacity-70">
              Menu
            </h3>
            <p className="text-sm paragh">Home</p>
          </div>
          <div className="flex flex-col w-auto">
            <h3 className="pb-4 font-semibold text-black text-opacity-70">
              Bantuan
            </h3>
            <p className="text-sm mb-1 paragh">Pusat Bantuan</p>
            <p className="text-sm mb-1 paragh">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] rounded-lg bg-black bg-opacity-50"></div>
      <div className="pt-8 pb-5 w-full flex flex-row justify-between">
        <p className="text-sm font-semibold text-black text-opacity-60">
          &copy; 2022 Sislog. All Rights Reserved
        </p>
      </div>
    </Layout>
  );
};

export default Footer;

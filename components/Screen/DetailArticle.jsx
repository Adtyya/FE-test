import React from "react";
import Layout from "../Layout";
import Link from "next/link";
import { toNormal } from "../../lib/slugFormatter";
import Card from "../Card";
import dummy from "../../lib/dummy";

const DetailArticle = ({ title }) => {
  let isTitle = toNormal(title);
  return (
    <Layout>
      <div className="flex flex-row w-full items-center space-x-5 px-2">
        <Link href={"/"}>
          <p className="text-sm text-yellow-custom cursor-pointer">Article</p>
        </Link>
        <img src="/arrow-right-bold.svg" alt="arrow" />
        <p className="text-xs md:text-sm text-black text-opacity-60">
          {isTitle}
        </p>
      </div>
      <div className="flex flex-col w-full py-5 h-auto justify-center items-start space-y-4 lg:space-y-8 px-1">
        <h1 className="text-black text-opacity-70">{isTitle}</h1>
        <p className="paragh text-xs md:text-sm">
          Di post oleh Ferdi - 12 Desember 2021 12:54 WIB
        </p>
        <img
          src="/container.png"
          alt="container"
          className="w-full h-full max-h-[280px] rounded-lg object-cover"
        />
        <p className="paragh text-xs md:text-sm lg:text-lg text-start text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          facilis earum est tenetur, nisi molestiae modi impedit quidem hic
          veniam officia fugit nobis corporis quia harum! Placeat dolores dolor
          sit obcaecati quae reprehenderit facilis, corporis, laboriosam ex
          animi inventore officia pariatur quaerat esse eum eaque exercitationem
          aperiam aspernatur adipisci qui.
        </p>
        <p className="paragh text-xs md:text-sm lg:text-lg text-start text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          assumenda, aperiam sed officia nulla praesentium veniam reiciendis
          facere modi maxime dignissimos qui nisi magnam inventore, perferendis
          provident laudantium neque nemo dolore? Asperiores sint est beatae
          velit tenetur reiciendis voluptates sequi odio quisquam sunt quia
          nobis similique, culpa maiores eaque optio recusandae facilis. Eius
          tempore, pariatur reiciendis unde eos expedita maxime beatae placeat
          laudantium ipsa eaque, modi provident magnam. Cupiditate perferendis
          eaque porro inventore. Consectetur ipsa blanditiis consequuntur
          maxime, reprehenderit voluptas.
        </p>
        <img
          src="/container.png"
          alt="container"
          className="w-full h-full max-h-[280px] rounded-lg object-cover"
        />
        <p className="paragh text-xs md:text-sm lg:text-lg text-start text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          facilis earum est tenetur, nisi molestiae modi impedit quidem hic
          veniam officia fugit nobis corporis quia harum! Placeat dolores dolor
          sit obcaecati quae reprehenderit facilis, corporis, laboriosam ex
          animi inventore officia pariatur quaerat esse eum eaque exercitationem
          aperiam aspernatur adipisci qui.
        </p>
        <p className="paragh text-xs md:text-sm lg:text-lg text-start text-black text-opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          reprehenderit excepturi possimus earum perferendis quo impedit soluta
          expedita sit saepe cumque provident officia libero voluptatibus, ipsum
          dolores, vitae atque asperiores quibusdam. Consequatur quidem fuga
          soluta possimus sapiente magni pariatur exercitationem dolores
          molestiae. Accusantium ducimus id eligendi nemo omnis! Aliquid hic
          exercitationem cumque facere. Quaerat, culpa sed molestias alias quos
          repellat consequuntur? Minus quas provident consequuntur. Dolore vel
          minus vero dolores harum voluptate modi id assumenda beatae! Iusto
          dignissimos rem odit aliquid. Omnis recusandae tempore possimus
          impedit officiis at et sapiente cupiditate nemo esse aliquam assumenda
          veritatis velit inventore, mollitia consequuntur?
        </p>
        <h3 className="text-gray-700 text-sm font-semibold text-opacity-50">
          Tags
        </h3>
        <div className="flex space-x-3">
          <p className="paragh text-xs md:text-sm">#ship</p>
          <p className="paragh text-xs md:text-sm">#shipping</p>
          <p className="paragh text-xs md:text-sm">#world</p>
          <p className="paragh text-xs md:text-sm">#business</p>
        </div>
        <h3 className="text-gray-700 text-sm font-semibold text-opacity-50">
          Keywords
        </h3>
        <div className="flex space-x-3">
          <p className="paragh text-xs md:text-sm">ship</p>
          <p className="paragh text-xs md:text-sm">shipping</p>
          <p className="paragh text-xs md:text-sm">world</p>
          <p className="paragh text-xs md:text-sm">business</p>
        </div>
      </div>
      <h1 className="text-black text-opacity-60 text-start my-4 p-1">
        Similiar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dummy.map((el, i) => (
          <Card
            image={el.image}
            title={el.title}
            excerpt={el.excerpt}
            date={el.date}
            tags={el.tags}
            key={i}
          />
        ))}
      </div>
    </Layout>
  );
};

export default DetailArticle;

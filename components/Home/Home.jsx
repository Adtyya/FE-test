import React from "react";
import Layout from "../Layout";
import Card from "../Card";

const Home = ({ articles }) => {
  return (
    <Layout>
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between pb-10">
        <h1 className="text-yellow-custom">Article</h1>
        <form className="w-max relative outline outline-1 rounded-lg outline-gray-300">
          <img
            src="/Search.svg"
            alt="logo"
            className="absolute left-1 top-2 h-4 w-4"
          />
          <input type="text" placeholder="Cari" className="input-cs" />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((el, i) => (
          <>
            <Card
              title={el.title}
              image={el.urlToImage}
              excerpt={el.excerpt}
              date={el.publishedAt}
              tags={el.tags}
              ori={el.url}
              key={i}
            />
          </>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

import React, { useState } from "react";
import Layout from "../Layout";
import Card from "../Card";
import Pagination from "../Pagination";

const Home = ({ articles }) => {
  const [curentPage, setCurentPage] = useState(1);
  const [pagination] = useState(6);
  const [search, setSearch] = useState(null);

  const lastIndexArticles = curentPage * pagination;
  const indexFirstArticles = lastIndexArticles - pagination;

  const maxPage = Math.ceil(articles.length / 6);

  const paginate = (number) => setCurentPage(number);
  const next = () => {
    if (curentPage === maxPage) {
      return curentPage;
    }
    setCurentPage((prev) => prev + 1);
  };
  const prev = () => {
    if (curentPage === 1) {
      return curentPage;
    }
    setCurentPage((prev) => prev - 1);
  };

  const searchTerm = (val) => {
    if (search == null) {
      return val;
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  };

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
          <input
            type="text"
            placeholder="Cari"
            className="input-cs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles
          .filter(searchTerm)
          .slice(indexFirstArticles, lastIndexArticles)
          .map((el, i) => (
            <Card
              title={el.title}
              image={el.urlToImage}
              excerpt={el.excerpt}
              date={el.publishedAt}
              tags={el.tags}
              ori={el.url}
              key={i}
            />
          ))}
      </div>
      <Pagination
        articlesPerPage={pagination}
        totalArticles={articles.length}
        paginate={paginate}
        next={next}
        prev={prev}
        curentPage={curentPage}
      />
    </Layout>
  );
};

export default Home;

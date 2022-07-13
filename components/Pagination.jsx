import PreviousMap from "postcss/lib/previous-map";
import React from "react";

const Pagination = ({
  articlesPerPage,
  totalArticles,
  paginate,
  curentPage,
  prev,
  next,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="flex flex-row w-full justify-center items-center mt-12 mb-4">
      <button
        className="text-yellow-custom text-sm mr-3"
        onClick={() => prev()}
      >
        Prev
      </button>
      {pageNumber.map((el, i) => (
        <li
          key={i}
          className={`pagination-cs ${
            el == curentPage ? "outline-active" : ""
          } transition-all duration-300`}
          onClick={() => paginate(el)}
        >
          {el}
        </li>
      ))}
      <button
        className="text-yellow-custom text-sm ml-3"
        onClick={() => next()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

import React from "react";
import formatDate from "../lib/dateFormatter";
import Link from "next/link";
import formatSlug from "../lib/slugFormatter";

const Card = ({ image, title, excerpt, date, tags, ori }) => {
  return (
    <Link href={`/read/${formatSlug(title)}`}>
      <div className="w-full h-auto p-2 lg:hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex flex-col space-y-1">
          <img
            src={
              image
                ? image
                : "https://images.unsplash.com/photo-1657543965889-62f45f4cc127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt={title}
            className="w-full max-h-[260px] h-full rounded-lg mb-3 object-cover"
          />
          <h3 className="text-black text-opacity-80 font-semibold text-lg">
            {title}
          </h3>
          <p className="text-sm text-black text-opacity-50">
            {formatDate(date)}
          </p>
          <p className="text-sm text-black text-opacity-70 flex flex-warp gap-2 flex-row items-center justify-start">
            {tags &&
              tags.map((el, i) => (
                <span key={i} className="inline-block py-1">
                  {el}
                </span>
              ))}
          </p>
          <p className="text-md text-black text-opacity-70">{excerpt}</p>
        </div>
        <a
          href={ori}
          className="text-md text-yellow-custom cursor-pointer"
          rel="nofollow"
        >
          Read More
        </a>
      </div>
    </Link>
  );
};

export default Card;

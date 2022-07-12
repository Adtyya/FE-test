import React from "react";

const Card = ({ image, title, excerpt, date, tags }) => {
  return (
    <div className="w-full h-auto p-2 lg:hover:scale-105 transition-all duration-300">
      <div className="flex flex-col space-y-1">
        <img
          src={image}
          alt={title}
          className="w-full max-h-[280px] h-full rounded-lg mb-3 object-cover"
        />
        <h3 className="text-black text-opacity-80">{title}</h3>
        <p className="text-md text-black text-opacity-50">{date}</p>
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
    </div>
  );
};

export default Card;

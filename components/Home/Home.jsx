import React from "react";
import Layout from "../Layout";
import Card from "../Card";

const Home = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Test",
      date: "2022 - 09109",
      excerpt: "kjhalskjdlkjasldkjalksjd",
      tags: ["#aaa", "#bbb"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "test",
      date: "2222",
      excerpt: "kjhalskjdlkjasldkjalksjd",
      tags: ["aaa", "bbb"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "test",
      date: "2222",
      excerpt: "kjhalskjdlkjasldkjalksjd",
      tags: ["aaa", "bbb"],
    },
  ];

  return (
    <Layout>
      <div className="flex flex-row items-center justify-between pb-10">
        <h1 className="text-yellow-custom">Article</h1>
        <form className="w-max relative">
          <input type="text" placeholder="alkjsdlkjljas" />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((el, i) => (
          <Card
            title={el.title}
            image={el.image}
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

export default Home;

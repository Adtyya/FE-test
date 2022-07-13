import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Screen/Home";
import Footer from "../components/Footer";
import fetchApi from "../lib/api";

const index = ({ articles }) => {
  // React.useEffect(() => {
  //   console.log(articles);
  // }, []);
  return (
    <>
      <Navbar />
      <Home articles={articles} />
      <Footer />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const data = await fetchApi("?country=id");
  const { articles } = data;
  return {
    props: {
      articles,
    },
  };
}

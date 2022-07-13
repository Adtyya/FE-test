import React from "react";
import Navbar from "../../components/Navbar";
import DetailArticle from "../../components/Screen/DetailArticle";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";

const DetailArticles = () => {
  const router = useRouter();
  const { read } = router.query;

  React.useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  return (
    <div>
      <Head>
        <title>Read</title>
      </Head>
      <Navbar />
      <DetailArticle title={read} />
      <Footer />
    </div>
  );
};

export default DetailArticles;

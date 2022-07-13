import React from "react";
import Navbar from "../../components/Navbar";
import DetailArticle from "../../components/Screen/DetailArticle";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

const DetailArticles = () => {
  const router = useRouter();
  const { read } = router.query;

  React.useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  return (
    <div>
      <Navbar />
      <DetailArticle title={read} />
      <Footer />
    </div>
  );
};

export default DetailArticles;

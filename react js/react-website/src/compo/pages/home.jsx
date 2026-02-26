import React from "react";
import Main from "./mainsection.jsx";
import Banner from "./banner.jsx";
import Item from "./item.jsx";
import Review from "./review.jsx";
import Banner2 from "./banner2.jsx";
import Footer from "./footer.jsx";

function Home() {
  return (
    <>
      <Main />
      <Banner />
      <div className="bg-green-950">
        <Item />
        <Review />
        <Banner2 />
        <Footer />
      </div>
    </>
  );
}

export default Home;

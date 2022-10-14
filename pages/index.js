import React, { useState } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = ({
  products,
  bannerData,
  necklaces,
  earrings,
  bracelet,
  rings
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <Banner />
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <div className="products-heading" id="necklace">
        <h2>Necklace</h2>
      </div>
      <div className="products-container">
        {necklaces?.map((necklace) => (
          <Product key={necklace._id} product={necklace} />
        ))}
      </div>
      <div className="products-heading" id="earring">
        <h2>Earring</h2>
      </div>
      <div className="products-container">
        {earrings?.map((earring) => (
          <Product key={earring._id} product={earring} />
        ))}
      </div>
      <div className="products-heading" id="ring">
        <h2>Rings</h2>
      </div>
      <div className="products-container">
        {rings?.map((ring) => (
          <Product key={ring._id} product={ring} />
        ))}
      </div>
      <div className="products-heading" id="bracelet">
        <h2>Bracelets</h2>
      </div>
      <div className="products-container">
        {bracelet?.map((bracelet) => (
          <Product key={bracelet._id} product={bracelet} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const rings = products.filter((product) => product.category === "ring");

  const earrings = products.filter(
    (product) => product.category === "earrings"
  );

  const necklaces = products.filter(
    (product) => product.category === "necklace"
  );

  const bracelet = products.filter(
    (product) => product.category === "bracelet"
  );

  const sale = products.filter((product) => product.sale === true);

  // products.console.log(products, "products");
  // console.log("lol");

  return {
    props: {
      products,
      bannerData,
      necklaces,
      earrings,
      rings,
      bracelet,
      sale
    }
  };
};

export default Home;

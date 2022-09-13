import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Catalog } from "./components/Catalog";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/global.css";

export const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="fw-bold">
        Journeyman - a trader or crafter who has completed an apprenticeship but
        is not at the level of a master craftsman
      </div>
      <Catalog products={products} setProducts={setProducts} />
    </div>
  );
};

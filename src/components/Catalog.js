import React from "react";
import { Card } from "react-bootstrap";

export const Catalog = ({ products, setProducts }) => {
  return (
    <>
      {products.map((product, index) => (
        <div>
          <img className="catalog-img" src={product.image.url} />
        </div>
      ))}
    </>
  );
};

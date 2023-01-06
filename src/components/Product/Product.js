import "./Product.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

const Product = (props) => {
  const { category, name, priceMin, priceMax } = props;
  const [active, setActive] = useState(0);
  return (
    <div className="card">
      <span className="category">{category}</span>
      <h4 className="name">{name}</h4>
      <div className="stars">
        {active >= 1 ? (
          <FaStar onClick={() => setActive(1)} />
        ) : (
          <FaRegStar onClick={() => setActive(1)} />
        )}
        {active >= 2 ? (
          <FaStar onClick={() => setActive(2)} />
        ) : (
          <FaRegStar onClick={() => setActive(2)} />
        )}
        {active >= 3 ? (
          <FaStar onClick={() => setActive(3)} />
        ) : (
          <FaRegStar onClick={() => setActive(3)} />
        )}
        {active >= 4 ? (
          <FaStar onClick={() => setActive(4)} />
        ) : (
          <FaRegStar onClick={() => setActive(4)} />
        )}
        {active >= 5 ? (
          <FaStar onClick={() => setActive(5)} />
        ) : (
          <FaRegStar onClick={() => setActive(5)} />
        )}
      </div>
      <br />
      <span className="price">
        {priceMin}€ {!priceMax ? "" : `- ${priceMax}€`}
      </span>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  priceMin: PropTypes.string,
  priceMax: PropTypes.string,
};

export default Product;

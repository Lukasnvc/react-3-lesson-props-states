import "./Products.css";
import Product from "../Product/Product.js";
import PropTypes from "prop-types";

const Products = () => {
  return (
    <div>
      <h1>BEST SELERS</h1>
      <div className="container">
        <Product
          category={"Canvases"}
          name={"OFF-WHITE AIR JOEDAN 1 CANVAS"}
          priceMin={"32.00"}
          priceMax={"120.00"}
        />
        <Product
          category={"Posters"}
          name={"YEEZY BOOST 350 V2 FROZEN YELLOW POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
        <Product
          category={"Stickers"}
          name={"YEEZY 350 V2 ZEBRA STICKER"}
          priceMin={"5.00"}
          priceMax={""}
        />
        <Product
          category={"Adidas"}
          name={"ADIDAS YEEZY POWERPHASE CALABASAS POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
        <Product
          category={"Jordans"}
          name={"AIR JORDAN 4 RED SUEDE POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
        <Product
          category={"Balenciaga"}
          name={"BALENCIAGA TRIPLE S POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
        <Product
          category={"Nike"}
          name={"NIKE BLAZER MID SAVAI POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
        <Product
          category={"Artists"}
          name={"LIL PEEP POSTER"}
          priceMin={"16.00"}
          priceMax={"32.00"}
        />
      </div>
    </div>
  );
};

export default Products;

import "./button.css";

const Button = ({ onClick, children, backgroundColor }) => {
  return (
    <button className="btn" onClick={onClick} style={{ backgroundColor }}>
      {children}
    </button>
  );
};

export default Button;
<div className="container">
  {/* <Product
  category="Canvases"
  name="OFF-WHITE AIR JOEDAN 1 CANVAS"
  priceMin={32.0}
  priceMax="120.00"
/> */}
</div>;

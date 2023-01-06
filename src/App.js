import "./App.css";
// import Button from "./components/Button/Button";
// import { useState } from "react";
import Products from "./components/Products/Products";
// React hook - useState - string information and setting information

function App() {
  // const [name, setName] = useState("Lukas");
  // const [age, setAge] = useState(24);
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Products />
      {/* <Button
        backgroundColor={"green"}
        onClick={() => {
          setAge(age * 2);
        }}>
        {age}
      </Button>
      <Button
        backgroundColor={"red"}
        onClick={() => {
          setName("Tomas");
        }}>
        {name}
      </Button>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}>
        Plus One
      </Button>
      <span style={{ fontSize: 20, color: "blue" }}>{count}</span>
      <Button
        onClick={() => {
          setCount(count - 1);
        }}>
        Minus One
      </Button>  */}
    </div>
  );
}

// Button.propTypes = {
//   backgroundColor: PropTypes.string, //optional string
//   onClick: PropTypes.func, //optional function
//   children: PropTypes.node.isRequired, //optional any react thing
// };
export default App;

import "./App.css";
import Images from "./component/Images";
import H1 from "./component/h1";
import Button from "./component/Button";
import { useState } from "react";
import Para from "./component/Para";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Images />
      <H1 />
      <Button count={count} setCount={setCount} />
      <Para />
    </>
  );
}

export default App;

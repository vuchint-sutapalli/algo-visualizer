import { useState } from "react";

import "./App.css";

import Sorter from "./Sorter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sorter></Sorter>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;

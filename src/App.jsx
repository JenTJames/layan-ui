import { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="test-area">
      <Button
        variant="text"
        color="info"
        pill={true}
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </Button>
    </div>
  );
}

export default App;

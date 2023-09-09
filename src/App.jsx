import { useState } from "react";
import "./App.css";

import { IoHeartOutline } from "react-icons/io5";

import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="test-area">
      <Button
        fit="compact"
        variant="soft"
        color="danger"
        pill={true}
        onClick={() => setCount((count) => count + 1)}
        startIcon={<IoHeartOutline size={25} />}
      >
        Count is {count}
      </Button>
    </div>
  );
}

export default App;

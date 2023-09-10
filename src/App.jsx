import "./App.css";
import Input from "./components/Input/Input";
import { IoMail } from "react-icons/io5";

function App() {
  return (
    <div className="test-area">
      <Input variant="underlined" color="danger" endOrnament={<IoMail />} />
    </div>
  );
}

export default App;

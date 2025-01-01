import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Transition } from "./transition";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Transition>
    </Transition>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Transition } from "./transition";
import { ParallaxSlider } from "./slider/index";
import { Navbar } from "./navbar";
import { Header } from "./header/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Transition>
      <Navbar />
      <Header />
      <div className="h-screen bg-black"></div>
    </Transition>
  );
}

export default App;

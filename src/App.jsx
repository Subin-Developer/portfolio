import { Transition } from "./transition";
import { Navbar } from "./navbar";
import { Header } from "./header/index";
import { MagneticButton } from ".../../components/common/button/index";
import moduleName from "./button_appearance";
import ScrollButton from "./button_appearance";

function App() {
  return (
    <Transition>
      <ScrollButton />
      <Navbar />
      <Header />
      <div className="relative z-10 pt-[100vh]">
        <div className="h-[200vh] bg-gray-800 text-white">
          <h2 className="text-center text-4xl p-10">Scrollable Content</h2>
          <MagneticButton>
            <span className="text-base capitalize text-white">PKOSKCOK</span>
          </MagneticButton>
        </div>
      </div>
    </Transition>
  );
}

export default App;

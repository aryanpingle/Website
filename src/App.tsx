import "./App.css";
import { Masthead } from "./components/Masthead";
import { FrontPageGrid } from "./components/FrontpageGrid";
import { adjustOnelineComponents } from "./components/OneLine/utils";
import throttle from "throttleit";

window.addEventListener("load", adjustOnelineComponents);
window.addEventListener("resize", throttle(adjustOnelineComponents, 100));

function App() {
  return (
    <>
      <Masthead />
      <FrontPageGrid />
    </>
  );
}

export default App;

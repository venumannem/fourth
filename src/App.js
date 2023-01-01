import "./App.css";
import Greet from "./components/Greet.js";

function Greet() {
  return (
    <div className="Greet ">
      <Greet name="jafar" age={30} />
      <Greet name="john" age={36} />
      <Greet name="jake" age={39} />
    </div>
  );
}

export default Greet;

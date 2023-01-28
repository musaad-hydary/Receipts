import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Receipts from "./components/Receipts";

function App() {
  return (
    <div className="App">
      <Home />
      <Overview />
      <Receipts />
    </div>
  );
}

export default App;

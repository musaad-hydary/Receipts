import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Overview from "./components/Overview";
import Upload from './components/Upload';


function App() {
  return (
    <div className="App">
      <Home />
      <Overview />
      <Upload/>
    </div>
  );
}

export default App;

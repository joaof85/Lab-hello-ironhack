import logo from "./logo.svg";
import "./App.css";
import Declarative from "./Declarative";
import Components from "./Components";
import SingleWay from "./SingleWay";
import Jsx from "./Jsx";

function App() {
  return (
    <>
      <header className="App-header">
        <div className="navbar">
          <img src="/images/ironhack-logo.svg" alt="a logo" />
          <img src="/images/menu-top.svg" alt="another logo" />
        </div>
        <div className="header">
          <h1 className="title">Say Hello to ReactJS</h1>
          <a className="par">
            <p>You will learn how to use </p>
            <p>the most popular frontend library,</p>
            <p>and become a Super Ninja developer</p>
          </a>

          <button className="button" type="button" class="btn btn-light">
            Awesome!
          </button>
        </div>
      </header>
      <div className="section flex-row">
        <div className="colum"> <Declarative /></div>
        <div className="colum"> <Components /> </div>
        <div className="colum"> <Jsx /></div>
        <div className="colum"> <SingleWay/></div>
      </div>
    </>
  );
}

export default App;

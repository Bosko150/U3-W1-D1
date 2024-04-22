import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent
          src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
          option1="Home"
          option2="Links"
          option3="Contacts"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent id="button1" buttonTxt="questi" className="first" />
        <ButtonComponent id="button2" buttonTxt="sono" className="first" />
        <ButtonComponent id="button3" buttonTxt="bottoni" className="first" />
        <div>
          <ImageComponent
            src="https://plus.unsplash.com/premium_photo-1664647949391-c4a4c87c9522?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="immagine cibo"
            style={{ width: "200px" }}
          />
          <ImageComponent
            src="https://images.unsplash.com/photo-1713617317250-c7020e06230f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="immagine uccello"
            style={{ width: "200px" }}
          />
          <ImageComponent
            src="https://images.unsplash.com/photo-1713709165652-098baac9656c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="immagine barca"
            style={{ width: "200px" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

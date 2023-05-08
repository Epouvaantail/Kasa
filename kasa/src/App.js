import logo from './images/logo_kasa.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav_head">
        <img src={logo} alt="logo"/>
        <nav>
          <p>Acceuil</p>
          <p>À propos</p>
        </nav>
      </header>
    </div>
  );
}

export default App;

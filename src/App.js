import logo from './logo.svg';
import './App.css';
import useWindowWidth from './useWindowWidth';

function App () {
  const width = useWindowWidth();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        {width}
      </header>
    </div>
  );
}

export default App;

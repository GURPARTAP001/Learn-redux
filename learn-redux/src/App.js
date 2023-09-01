
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App() {
  return (
    <div className="app">
      <div className="heading">
        <h1>App</h1>
        <h2>Current Amount:</h2>
        <h2>Total Bonus:</h2>
      </div>


      <Account />
      <Bonus />
    </div>


  );
}

export default App;

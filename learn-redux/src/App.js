import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import {useSelector} from 'react-redux'

function App() {
  // now to combine the react state with the state of the redux we use the useSelector hook
  
  // here we are access the global state of the redux using the state then inside the global state we are access the account state and in account we take the amount
  const amount=useSelector(state=>state.account.amount)
  const bonus=useSelector(state=>state.bonus.points)
  return (
    <div className="app">
      <div className="heading">
        <h1>App</h1>
        <h2>Current Amount:${amount}</h2>
        <h2>Total Bonus:{bonus}</h2>
      </div>

      <Account />
      <Bonus />
    </div>


  );
}

export default App;

import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-header">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;

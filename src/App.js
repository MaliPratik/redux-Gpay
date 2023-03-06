import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry';
import Display from './components/Display';

function App() {
  return (
    <div className="container">
      <h1 className='text-center'>Gpay</h1>
      <hr/>
      <Entry/>
     <Display/>
    </div>
  );
}

export default App;

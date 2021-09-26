import './App.scss';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AddBtn from './components/AddBtn';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <SearchBar /> */}
      <AddBtn />
      <Home />
    </div>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './components/Search';
import AddBtn from './components/AddBtn';
import Home from './components/Home';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <AddBtn />
          <Home />
        </Route>
        <Route path="/addstock" exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

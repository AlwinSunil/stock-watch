import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Search from './components/Search';
import AddBtn from './components/AddBtn';
import Home from './components/Home';
import "./firebase.js";
import './App.scss';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(null);
  }, []);

  if (loader) {
    return <Loading />;
  }

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

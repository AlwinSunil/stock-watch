import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Loading from './components/Loading';
import Auth from './components/Auth';
import Login from './components/Login/Login';
import Signup from './components/Signup';
import HomePage from "./components/HomePage"
import Search from './components/Search';
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
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/auth" component={Auth} exact />
      <Route path="/" exact component={HomePage} />
      <Route path="/addstock" exact component={Search} />
    </div>
  );
}

export default App;

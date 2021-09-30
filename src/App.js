import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from './components/Loading';
import Auth from './components/Auth';
import Login from './components/Login/Login';
import Signup from './components/Signup';
import HomePage from "./components/HomePage"
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
      <Route path="/auth" component={Auth} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/" component={HomePage} exact />
      <Redirect path="*" to="/" exact />
    </div>
  );
}

export default App;

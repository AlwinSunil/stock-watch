import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Loading from './components/Loading';
import Login from './components/Login/Login';
import Search from './components/Search';
import Signup from './components/Signup';
import HomePage from "./components/HomePage"
import "./firebase.js";
import './App.scss';

function App() {
  const [loader, setLoader] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState();

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      setUserLoggedIn(true);
      console.log('Found user :' + user);
    } else {
      console.log('No user Found');
      setUserLoggedIn(false);
    }
    setLoader(null);
  }, []);

  if (loader) {
    return <Loading />;
  }

  return (
    <div className="app" id="app">
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/" exact>
        <HomePage loggedin={userLoggedIn} />
      </Route>
      {userLoggedIn ? (
        <Route path="/addstock" component={Search} exact />
      ) : (
        <Redirect from="*" to="/" />
      )}
    </div>
  );
}

export default App;

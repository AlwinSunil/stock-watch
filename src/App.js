import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Redirect } from "react-router-dom";
import Loading from './components/Loading';
import Login from './components/Login/Login';
import Search from './components/Search';
import Signup from './components/Signup';
import HomePage from "./components/HomePage";
import "./firebase.js";
import './App.scss';

function App() {
  const [loader, setLoader] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("User found : " + uid);
        setUserLoggedIn(true);
      } else {
        console.log("No user found");
        setUserLoggedIn(false);
      }
    });
    setLoader(false);
  }, [])

  if (loader) {
    return <Loading />;
  }

  if (userLoggedIn === true) {
    return (
      <div className="app" id="app">
        <Route path="/" exact>
          <HomePage loggedin={userLoggedIn} />
        </Route>
        <Route path="/addstock" component={Search} exact />
        <Redirect from="*" to="/" />
      </div>
    )
  } else if (userLoggedIn === false) {
    return (
      <div className="app" id="app">
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Redirect from="/" to="/login" />
      </div>
    )
  }

  return <Loading />;
}

export default App;

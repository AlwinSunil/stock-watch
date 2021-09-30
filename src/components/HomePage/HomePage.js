import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Navbar from '../../components/Navbar';
import AddBtn from '../../components/AddBtn';
import Home from '../../components/Home';
import Search from '../../components/Search';

function HomePage() {
    const [userLoggedIn, setUserLoggedIn] = useState();

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            console.log('Found user :' + user);
            setUserLoggedIn(true);
        } else {
            console.log('No user Found');
        }
    }, []);

    if (userLoggedIn === true) {
        return (
            <>
                <Navbar />
                <AddBtn />
                <Home />
                <Route path="/addstock" component={Search} exact />
            </>
        )
    } else {
        return <Redirect to="/auth" />
    }
}

export default HomePage

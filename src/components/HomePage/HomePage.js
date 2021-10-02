import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import AddBtn from '../../components/AddBtn';
import Home from '../../components/Home';
import Search from '../../components/Search';


function HomePage(props) {
    const [userLoggedIn, setUserLoggedIn] = useState();

    useEffect(() => {
        if (props.loggedin === true) {
            setUserLoggedIn(true);
        } else {
            setUserLoggedIn(false);
        }
    }, [props.loggedin])

    if (userLoggedIn === true) {
        return (
            <>
                <Navbar />
                <AddBtn />
                <Home />
                <Route path="/addstock" component={Search} exact />
            </>
        )
    } else if (userLoggedIn === false) {
        return <Redirect to="/login" />
    } else {
        return <Loading />;
    }
}

export default HomePage

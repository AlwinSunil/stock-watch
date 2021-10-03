import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import AddBtn from '../../components/AddBtn';
import Home from '../../components/Home';

function HomePage(props) {
    const [userLoggedIn, setUserLoggedIn] = useState();

    useEffect(() => {
        document.title = "Console - Stock Watch"
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
            </>
        )
    } else if (userLoggedIn === false) {
        return <Redirect to="/login" />
    } else {
        return <Loading />;
    }
}

export default HomePage

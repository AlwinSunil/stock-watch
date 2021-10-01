import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
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
    }, [])

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

// function HomePage() {
//     const [userLoggedIn, setUserLoggedIn] = useState();
//     const [userLoggedOut, setUserLoggedOut] = useState();

//     useEffect(() => {
//         document.title = "Console - Stock Watch"
//         const user = getAuth().currentUser;
//         if (user) {
//             console.log('Found user :' + user);
//             setUserLoggedIn(true);
//         } else {
//             console.log('No user Found');
//             setUserLoggedOut(true);
//         }
//     }, []);

//     if (userLoggedIn === true) {
//         return (
//             <>
//                 <Navbar />
//                 <AddBtn />
//                 <Home />
//                 <Route path="/addstock" component={Search} exact />
//             </>
//         )
//     } else if (userLoggedOut === true) {
//         return <Redirect to="/login" />
//     } else {
//         return <Loading />;
//     }
// }

export default HomePage

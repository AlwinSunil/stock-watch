import React, { useEffect } from "react"
import Navbar from "../../components/Navbar"
import AddBtn from "../../components/AddBtn"
import Home from "../../components/Home"

function HomePage() {
    useEffect(() => {
        document.title = "Console - Stock Watch"
    }, [])

    return (
        <>
            <Navbar />
            <AddBtn />
            <Home />
        </>
    )
}

export default HomePage

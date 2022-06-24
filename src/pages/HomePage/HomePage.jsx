import React, { useEffect } from "react"
import AddBtn from "@components/AddBtn"
import Home from "@components/Home"
import Navbar from "@components/Navbar"

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

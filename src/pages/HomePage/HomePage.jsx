import React, { useContext } from "react"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import Loading from "../../components/Loading"
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

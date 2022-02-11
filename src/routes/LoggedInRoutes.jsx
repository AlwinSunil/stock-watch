import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import About from "./../pages/About"
import HomePage from "./../pages/HomePage"
import Profile from "./../pages/Profile"
import ProfileUpdate from "./../pages/ProfileUpdate"
import Search from "./../pages/Search"
import StockDetails from "./../pages/StockDetails"

function LoggedInRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/addstock" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stock=:stock" element={<StockDetails />} />
            <Route path="/updateprofile" element={<ProfileUpdate />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default LoggedInRoutes

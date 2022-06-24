import React, { useContext, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Navigate, Route, Routes } from "react-router-dom"
import { doc, onSnapshot } from "firebase/firestore"
import { UserIdContext } from "@context/UserIdContext"
import { UserWatchListContext } from "@context/UserWatchListContext"
import { db } from "~firebase"
import About from "@pages/About"
import HomePage from "@pages/HomePage"
import Profile from "@pages/Profile"
import ProfileUpdate from "@pages/ProfileUpdate"
import Search from "@pages/Search"
import StockDetails from "@pages/StockDetails"

const queryClient = new QueryClient()

function LoggedInRoutes() {
    const [watchList, setWatchList] = useState()
    const [userId] = useContext(UserIdContext)

    useEffect(() => {
        if (userId) {
            onSnapshot(doc(db, "users", userId), (doc) => {
                console.log("Current data: ", doc.data().symbols)
                setWatchList(doc.data().symbols)
            })
        }
    }, [userId])

    return (
        <UserWatchListContext.Provider value={[watchList]}>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/addstock" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/stock=:stock"
                        element={<StockDetails user={userId} />}
                    />
                    <Route path="/updateprofile" element={<ProfileUpdate />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </UserWatchListContext.Provider>
    )
}

export default LoggedInRoutes

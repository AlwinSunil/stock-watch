import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import Navigation from "../../components/Navigation"
import "./StockDetails.scss"

function StockDetails() {
    let { stock } = useParams()

    useEffect(() => {
        console.log(
            `${import.meta.env.VITE_VERCEL_URL}/api/stock?symbol=${stock}`
        )
        axios({
            method: "get",
            url: `${import.meta.env.VITE_VERCEL_URL}/api/stock?symbol=${stock}`,
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navigation header={`${stock}`} />
        </>
    )
}

export default StockDetails

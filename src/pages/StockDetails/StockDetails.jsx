import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Navigation from "../../components/Navigation"
import "./StockDetails.scss"

function StockDetails() {
    let { stock } = useParams()

    useEffect(() => {
        axios({
            method: "get",
            url: `/api/stock?symbol=${stock}`,
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

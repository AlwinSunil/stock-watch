import React, { useEffect, useState } from "react"
import axios from "axios"
import { getUserSymbols } from "../../firebase"
import "./Home.scss"

function Home() {
    const [stockResult, setStockResult] = useState([])
    const [queryCallTime, setQueryCallTime] = useState([])

    useEffect(() => {
        getUserSymbols("V20rgQSMLkTPhkVLYUOMWhMstLz2").then((result) => {
            getData(result)
        })
    }, [])

    function getData(symbols) {
        for (let i = 0; i < symbols.length; i++) {
            axios({
                method: "get",
                url: `/api/stockpreview?symbol=${symbols[i]}`,
            })
                .then((res) => {
                    const data = res.data.result[0]

                    setStockResult((stockResult) => [...stockResult, data])
                    console.log(res.data.result[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        var today = new Date()
        console.log(today.toLocaleTimeString())
        setQueryCallTime(today.toLocaleTimeString())
    }

    return (
        <div className="home">
            <p className="querycall">
                Time at data last updated:&nbsp;
                <strong>{queryCallTime && `${queryCallTime}`}</strong>
            </p>
            <div className="stocks">
                {stockResult.map((stock) => (
                    <div className="stock hover" key={stock.symbol}>
                        <div className="stock__details">
                            <p className="stock__symbol">{stock.symbol}</p>
                            <p className="stock__name">{stock.name}</p>
                        </div>
                        <div className="stock__price">
                            <p className="stock__price-inst">
                                {parseFloat(stock.price).toFixed(2)}
                                &nbsp;
                                {stock.currency}
                            </p>
                            <p className="stock__price-grow">
                                {parseFloat(stock.changepercent).toFixed(2)}
                                &nbsp;%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

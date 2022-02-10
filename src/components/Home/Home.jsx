import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Home.scss"

function Home() {
    const [stockResult, setStockResult] = useState([])

    const stocks = ["TSLA", "GOOGL", "MSFT", "AAPL", "MDB", "DIS"]

    useEffect(() => {}, [])

    return (
        <div className="home">
            <div className="stocks">
                {stockResult.map((stock) => (
                    <div className="stock" key={stock.symbol}>
                        <div className="stock__details">
                            <p className="stock__symbol">{stock.symbol}</p>
                            <p className="stock__name">{stock.symbol}</p>
                        </div>
                        <div className="stock__price">
                            <p className="stock__price-inst">{stock.price}</p>
                            <p className="stock__price-grow">
                                {stock.perchange}
                            </p>
                        </div>
                    </div>
                ))}
                {stockResult && (
                    <>
                        <p style={{ overflowWrap: "break-word" }}>
                            {JSON.stringify(stockResult)}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home

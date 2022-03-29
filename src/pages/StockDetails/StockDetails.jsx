import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Navigation from "../../components/Navigation"
import "./StockDetails.scss"

function StockDetails() {
    const [stockDetails, setstockDetails] = useState([])
    let { stock } = useParams()

    useEffect(() => {
        axios({
            method: "get",
            url: `/api/stock?symbol=${stock}`,
        })
            .then((res) => {
                console.log(res.data.result[0])
                setstockDetails(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navigation header={`${stock}`} />
            {stockDetails.map((details) => (
                <div className="stockinfo" key={details.symbol}>
                    <div className="stockinfo__header">
                        <div className="stockinfo__header-col">
                            <img src={details.logo} alt="" />
                            <div className="stockinfo__header-row">
                                <h4>{details.name}</h4>
                                <h5>
                                    {details.symbol}&nbsp;-&nbsp;
                                    {details.exchange}
                                </h5>
                            </div>
                        </div>
                        <div className="stockinfo__header-col stockinfo__header-values">
                            <div className="stockinfo-price">
                                {parseFloat(details.price).toFixed(2)}&nbsp;
                                {details.currency}
                            </div>
                            <div className="stockinfo-change">
                                {parseFloat(details.change).toFixed(2)}
                                &nbsp;&nbsp;
                                {parseFloat(details.changepercent).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                    <div className="stockinfo__card">
                        <div className="stockinfo-open">
                            <h5>Open</h5>
                            <p>{parseFloat(details.open).toFixed(2)}</p>
                        </div>
                        <div className="stockinfo-prevclose">
                            <h5>Prev Close</h5>
                            <p>{parseFloat(details.prevclose).toFixed(2)}</p>
                        </div>
                        <div className="stockinfo-vol">
                            <h5>Volume</h5>
                            <p>
                                {parseInt(details.volume)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                        <div className="stockinfo-markcap">
                            <h5>Market Cap</h5>
                            <p>
                                {details.marketcap
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                        <div className="stockinfo-dividend">
                            <h5>Dividend per share</h5>
                            <p>{details.dividendpershare}</p>
                        </div>
                        <div className="stockinfo-52week">
                            <h5>52 Week Average</h5>
                            <p>
                                {details.fiftydaymovingaverage
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </div>
                    <div className="stockinfo__des">
                        <h4>Description</h4>
                        <p>{details.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default StockDetails

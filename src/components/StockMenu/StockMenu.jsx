import React, { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

function StockMenu(props) {
    const [stock, setStock] = useState()

    const { isError, error } = useQuery(`${props.symbol}`, () =>
        fetch(`/api/stockpreview?symbol=${props.symbol}`).then((res) =>
            res.json().then((data) => {
                setStock(data.result[0])
            })
        )
    )

    // if (isError) {
    //     return <span>{error}</span>
    // }

    return (
        <>
            {stock && (
                <Link
                    className="stock menu"
                    key={props.symbol}
                    to={`/stock=${props.symbol}`}
                >
                    <div className="stock__details">
                        <p className="stock__symbol">{props.symbol}</p>
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
                </Link>
            )}
        </>
    )
}

export default StockMenu

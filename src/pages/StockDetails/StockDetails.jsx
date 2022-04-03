import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { UserWatchListContext } from "../../context/UserWatchListContext"
import Navigation from "../../components/Navigation"
import Alert from "@mui/material/Alert"
import Fade from "@mui/material/Fade"
import Stack from "@mui/material/Stack"
import { addSymbolToWatchList, removeSymbolFromWatchList } from "../../firebase"
import "./StockDetails.scss"

function StockDetails(props) {
    const [stockDetails, setstockDetails] = useState([])
    const [isWatching, setIsWatching] = useState()
    const [checked, setChecked] = useState(false)
    const [removed, setRemoved] = useState(false)

    const { list } = useContext(UserWatchListContext)
    const [watchList] = list

    let { stock } = useParams()

    const handleChange = () => {
        setChecked((prev) => !prev)
        if (checked === false) {
            setTimeout(() => {
                setChecked((prev) => !prev)
            }, 1250)
        }
    }

    const handleChangeRemove = () => {
        setRemoved((prev) => !prev)
        if (removed === false) {
            setTimeout(() => {
                setRemoved((prev) => !prev)
            }, 1250)
        }
    }

    useEffect(() => {
        if (watchList) {
            if (watchList.includes(stock)) {
                setIsWatching(true)
            } else {
                setIsWatching(false)
            }
        }
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
    }, [watchList])

    const handleAddToWatchlist = () => {
        if (isWatching === false) {
            addSymbolToWatchList(stock, props.user, watchList.length)
            handleChange()
        }
    }

    const handleRemoveToWatchlist = () => {
        if (isWatching === true) {
            removeSymbolFromWatchList(stock, props.user)
            handleChangeRemove()
        }
    }

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
                    <div className="stockinfo__action">
                        {isWatching ? (
                            <>
                                <button
                                    className="stockinfo__action-add"
                                    onClick={handleAddToWatchlist}
                                    disabled
                                >
                                    Add to watch list
                                </button>
                                <button
                                    className="stockinfo__action-remove"
                                    onClick={handleRemoveToWatchlist}
                                >
                                    Remove from watch list
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="stockinfo__action-add"
                                    onClick={handleAddToWatchlist}
                                >
                                    Add to watch list
                                </button>
                                <button
                                    className="stockinfo__action-remove"
                                    onClick={handleRemoveToWatchlist}
                                    disabled
                                >
                                    Remove from watch list
                                </button>
                            </>
                        )}
                    </div>
                    {checked ? (
                        <Fade
                            in={checked}
                            sx={{
                                width: "100%",
                                top: "8px",
                                padding: "0px 0.5rem",
                                position: "fixed",
                                right: "0",
                                borderRadius: "32px",
                                zIndex: "999",
                            }}
                        >
                            <Stack
                                sx={{
                                    width: "100%",
                                }}
                                spacing={2}
                            >
                                <Alert severity="success" color="success">
                                    {details.symbol} added to watch list
                                </Alert>
                            </Stack>
                        </Fade>
                    ) : null}
                    {removed ? (
                        <Fade
                            in={removed}
                            sx={{
                                width: "100%",
                                top: "8px",
                                padding: "0px 0.5rem",
                                position: "fixed",
                                right: "0",
                                borderRadius: "32px",
                                zIndex: "999",
                            }}
                        >
                            <Stack
                                sx={{
                                    width: "100%",
                                }}
                                spacing={2}
                            >
                                <Alert severity="error" color="error">
                                    Failed to add {details.symbol} to watch list
                                </Alert>
                            </Stack>
                        </Fade>
                    ) : null}
                </div>
            ))}
        </>
    )
}

export default StockDetails

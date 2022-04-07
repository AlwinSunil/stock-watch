import React, { useContext, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { UserWatchListContext } from "../../context/UserWatchListContext"
import Loading from "../../components/Loading"
import Navigation from "../../components/Navigation"
import Alert from "@mui/material/Alert"
import Fade from "@mui/material/Fade"
import Stack from "@mui/material/Stack"
import { addSymbolToWatchList, removeSymbolFromWatchList } from "../../firebase"
import "./StockDetails.scss"

function StockDetails(props) {
    const [stockDetails, setstockDetails] = useState([])
    const [isWatching, setIsWatching] = useState()
    const [stockAdded, setStockAdded] = useState(false)
    const [stockRemoved, setStockRemoved] = useState(false)
    const [reachedWatchListLimit, setReachedWatchListLimit] = useState(false)

    const { list } = useContext(UserWatchListContext)
    const [watchList] = list

    let { stock } = useParams()

    useEffect(() => {
        if (watchList) {
            if (watchList.includes(stock)) {
                setIsWatching(true)
            } else {
                setIsWatching(false)
            }
        }
    }, [watchList])

    const { isLoading, isError, error } = useQuery("stock", () =>
        fetch(`/api/stock?symbol=${stock}`).then((res) =>
            res.json().then((data) => {
                setstockDetails(data.result)
            })
        )
    )

    const handleStockAdded = () => {
        setStockAdded((prev) => !prev)
        if (stockAdded === false) {
            setTimeout(() => {
                setStockAdded((prev) => !prev)
            }, 1500)
        }
    }

    const handleStockRemove = () => {
        setStockRemoved((prev) => !prev)
        if (stockRemoved === false) {
            setTimeout(() => {
                setStockRemoved((prev) => !prev)
            }, 1500)
        }
    }

    const handleReachedWatchListLimit = () => {
        setReachedWatchListLimit((prev) => !prev)
        if (reachedWatchListLimit === false) {
            setTimeout(() => {
                setReachedWatchListLimit((prev) => !prev)
            }, 2500)
        }
    }

    const handleAddToWatchlist = () => {
        if (isWatching === false) {
            addSymbolToWatchList(stock, props.user, watchList.length)
                .then((result) => {
                    if (result === true) {
                        handleStockAdded()
                    } else if (result === false) {
                        handleReachedWatchListLimit()
                    }
                })
                .catch((err) => {
                    console.log("Error : ", err)
                })
        }
    }

    const handleRemoveToWatchlist = () => {
        if (isWatching === true) {
            removeSymbolFromWatchList(stock, props.user)
                .then((result) => {
                    if (result === 200) {
                        handleStockRemove()
                    }
                })
                .catch((err) => {
                    console.log("Error : ", err)
                })
        }
    }

    if (isLoading) {
        return (
            <>
                <Navigation header={`${stock}`} />
                <Loading />
            </>
        )
    }

    return (
        <>
            <Navigation header={`${stock}`} />
            {stockDetails && (
                <>
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
                                        {parseFloat(details.price).toFixed(2)}
                                        &nbsp;
                                        {details.currency}
                                    </div>
                                    <div className="stockinfo-change">
                                        {parseFloat(details.change).toFixed(2)}
                                        &nbsp;&nbsp;
                                        {parseFloat(
                                            details.changepercent
                                        ).toFixed(2)}
                                        %
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
                                    <p>
                                        {parseFloat(details.prevclose).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                                <div className="stockinfo-vol">
                                    <h5>Volume</h5>
                                    <p>
                                        {parseInt(details.volume)
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                    </p>
                                </div>
                                <div className="stockinfo-markcap">
                                    <h5>Market Cap</h5>
                                    <p>
                                        {details.marketcap
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
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
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
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
                            {stockAdded ? (
                                <Fade
                                    in={stockAdded}
                                    sx={{
                                        width: "100%",
                                        top: "8px",
                                        padding: "0px 0.75rem",
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
                                        <Alert
                                            severity="success"
                                            color="success"
                                            style={{
                                                border: "1px solid #4caf50",
                                            }}
                                        >
                                            {details.symbol} added to watch list
                                        </Alert>
                                    </Stack>
                                </Fade>
                            ) : null}
                            {stockRemoved ? (
                                <Fade
                                    in={stockRemoved}
                                    sx={{
                                        width: "100%",
                                        top: "8px",
                                        padding: "0px 0.75rem",
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
                                        <Alert
                                            severity="error"
                                            color="error"
                                            style={{
                                                border: "1px solid #ef5350",
                                            }}
                                        >
                                            Removed {details.symbol} from watch
                                            list
                                        </Alert>
                                    </Stack>
                                </Fade>
                            ) : null}
                            {reachedWatchListLimit ? (
                                <Fade
                                    in={reachedWatchListLimit}
                                    sx={{
                                        width: "100%",
                                        top: "8px",
                                        padding: "0px 0.75rem",
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
                                        <Alert
                                            variant="outlined"
                                            severity="warning"
                                            sx={{
                                                backgroundColor: "#fff",
                                            }}
                                        >
                                            You reached watch list limit. Since
                                            we are in beta we limit stocks in
                                            watch list to 10
                                        </Alert>
                                    </Stack>
                                </Fade>
                            ) : null}
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default StockDetails

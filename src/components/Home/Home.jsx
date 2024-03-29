import React, { useContext, useEffect, useState } from "react"
import { UserWatchListContext } from "@context/UserWatchListContext"
import NoFavStock from "@components/NoFavStock"
import StockMenu from "@components/StockMenu"
import Modal from "@mui/material/Modal"
import "./Home.scss"

function Home() {
    const [open, setOpen] = useState(false)
    const [listNull, setListNull] = useState(false)
    const [watchList] = useContext(UserWatchListContext)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        if (watchList) {
            if (watchList.length === 0) {
                setListNull(true)
            }
        }
    }, [watchList])

    return (
        <div className="home">
            <div className="querycall" onClick={handleOpen}>
                <img src="/assets/icons/info.svg" alt="" />
                <p>Data may not be that accurate.</p>
            </div>

            {listNull ? (
                <NoFavStock />
            ) : (
                <div className="stocks">
                    {watchList && (
                        <>
                            {watchList.map((stock) => (
                                <StockMenu symbol={stock} key={stock} />
                            ))}
                        </>
                    )}
                </div>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    height: "100vh",
                    display: "flex",
                }}
            >
                <div className="modal">
                    <img src="/assets/icons/info.svg" alt="" />
                    <p>
                        This is just an project for my personal portfolio. Data
                        may not be that accurate. Data may have a latency of 2-3
                        seconds.
                    </p>
                    <p>
                        Data should not be used to make any financial decisions
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default Home

import React, { useContext, useState } from "react"
import { UserWatchListContext } from "../../context/UserWatchListContext"
import Modal from "@mui/material/Modal"
import StockMenu from "../StockMenu/StockMenu"
import "./Home.scss"

function Home() {
    const [open, setOpen] = useState(false)

    const { list } = useContext(UserWatchListContext)
    const [watchList] = list

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className="home">
            <div className="querycall" onClick={handleOpen}>
                <img src="/assets/icons/info.svg" alt="" />
                <p>Data may not be that accurate.</p>
            </div>
            <div className="stocks">
                {watchList && (
                    <>
                        {watchList.map((stock) => (
                            <StockMenu symbol={stock} key={stock} />
                        ))}
                    </>
                )}
            </div>
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

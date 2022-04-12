import React from "react"
import "./NoFavStock.scss"

function NoFavStock() {
    return (
        <div className="nofavstocks">
            <div className="nofavstocks__container">
                <img src="/assets/icons/add-circle.svg" alt="" />
                <p>Add your favorite stocks to watch list</p>
            </div>
        </div>
    )
}

export default NoFavStock

import React from "react";
import { Link } from "react-router-dom";
import "./AddBtn.scss";

function AddBtn() {
    return (
        <div className="addstock">
            <Link to="/addstock" className="addstock-btn">
                <img
                    className="addstock-img"
                    src="/assets/icons/add.svg"
                    alt=""
                />
                <p className="addstock-p">Add Stock</p>
            </Link>
        </div>
    );
}

export default AddBtn;

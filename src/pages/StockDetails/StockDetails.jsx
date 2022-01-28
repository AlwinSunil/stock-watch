import React from "react";
import Navigation from "../../components/Navigation";
import { useParams } from "react-router-dom";
import "./StockDetails.scss";

function StockDetails() {
    let { stock } = useParams();

    const links = [
        `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=c4us1e2ad3id268aq4cg`,
        `https://finnhub.io/api/v1/quote?symbol=${stock}&token=c4us1e2ad3id268aq4cg`,
    ];

    return (
        <>
            <Navigation header={`${stock}`} />
        </>
    );
}

export default StockDetails;

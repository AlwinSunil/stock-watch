import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.scss";

function Home() {
    const [stockResult, setStockResult] = useState([]);

    const stocks = ["TSLA", "GOOGL", "MSFT", "AAPL"];

    useEffect(() => {
        const result = [];
        for (let i = 0; i < stocks.length; i++) {
            axios({
                method: "get",
                url: `https://finnhub.io/api/v1/quote?symbol=${stocks[i]}&token=c4us1e2ad3id268aq4cg`,
            })
                .then((res) => {
                    result.push({
                        symbol: `${stocks[i]}`,
                        price: `${res.data.c}`,
                        perchange: `${res.data.dp}`,
                        high: `${res.data.h}`,
                        low: `${res.data.l}`,
                    });
                    const data = {
                        symbol: `${stocks[i]}`,
                        price: `${res.data.c}`,
                        perchange: `${res.data.dp}`,
                        high: `${res.data.h}`,
                        low: `${res.data.l}`,
                    };
                    setStockResult((stockResult) => [...stockResult, data]);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log(result);
    }, []);

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
                {stockResult && <>{JSON.stringify(stockResult)}</>}
            </div>
        </div>
    );
}

export default Home;

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

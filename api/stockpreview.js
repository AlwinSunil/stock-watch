import axios from "axios"

export default function handler(request, response) {
    const host = request.headers["x-forwarded-host"]
    const referer = request.headers.referer
    console.log("Referrer", referer)
    console.log("Host", host)

    const { symbol } = request.query

    const thirdpartyAPI = [
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_APIKEY}`,
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_APIKEY}`,
    ]

    const result = []

    getData()

    async function getData() {
        const quote = await axios.get(thirdpartyAPI[0])
        const overview = await axios.get(thirdpartyAPI[1])
        result.push({
            symbol: `${overview.data["Symbol"]}`,
            logo: `${`https://finnhub.io/api/logo?symbol=${overview.data["Symbol"]}`}`,
            open: `${quote.data["Global Quote"]["02. open"]}`,
            high: `${quote.data["Global Quote"]["03. high"]}`,
            low: `${quote.data["Global Quote"]["04. low"]}`,
            price: `${quote.data["Global Quote"]["05. price"]}`,
            change: `${quote.data["Global Quote"]["09. change"]}`,
            changepercent: `${quote.data["Global Quote"]["10. change percent"]}`,
            name: `${overview.data["Name"]}`,
            exchange: `${overview.data["Exchange"]}`,
            currency: `${overview.data["Currency"]}`,
        })
        return await response.status(200).send({
            result,
        })
    }
}

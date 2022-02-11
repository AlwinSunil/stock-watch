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
            symbol: `${quote.data["Global Quote"]["01. symbol"]}`,
            logo: `${`https://finnhub.io/api/logo?symbol=${quote.data["Global Quote"]["01. symbol"]}`}`,
            open: `${quote.data["Global Quote"]["02. open"]}`,
            high: `${quote.data["Global Quote"]["03. high"]}`,
            low: `${quote.data["Global Quote"]["04. low"]}`,
            price: `${quote.data["Global Quote"]["05. price"]}`,
            volume: `${quote.data["Global Quote"]["06. volume"]}`,
            lasttradingday: `${quote.data["Global Quote"]["07. latest trading day"]}`,
            prevclose: `${quote.data["Global Quote"]["08. previous close"]}`,
            change: `${quote.data["Global Quote"]["09. change"]}`,
            changepercent: `${quote.data["Global Quote"]["10. change percent"]}`,
            name: `${overview.data["Name"]}`,
            description: `${overview.data["Description"]}`,
            exchange: `${overview.data["Exchange"]}`,
            currency: `${overview.data["Currency"]}`,
            country: `${overview.data["Country"]}`,
            marketcap: `${overview.data["MarketCapitalization"]}`,
            dividendpershare: `${overview.data["DividendPerShare"]} ${overview.data["Currency"]}`,
            sector: `${overview.data["Sector"]}`,
            industry: `${overview.data["Industry"]}`,
            fiftydaymovingaverage: `${overview.data["50DayMovingAverage"]}`,
            twohundreddaymovingaverage: `${overview.data["200DayMovingAverage"]}`,
        })
        return await response.status(200).send({
            result,
        })
    }
}

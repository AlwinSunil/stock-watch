export default function handler(request, response) {
    const { symbol } = request.query
    const headers = request.headers
    const host = headers["x-forwarded-host"]
    const referer = request.headers.referer
    console.log(headers)
    console.log("Referrer", request.headers.referer)
    response.status(200).send({
        Symbol: symbol,
        Host: `${host}`,
        Referer: `${referer}`,
    })
}

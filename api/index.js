export default function handler(request, response) {
    const headers = request.headers
    const host = headers["x-forwarded-host"]
    const referer = request.headers.referer
    console.log("Referrer", request.headers.referer)
    response.status(200).send({
        Symbol: symbol,
        Headers: `${request.headers}`,
        Host: `${host}`,
        Referer: `${referer}`,
    })
}

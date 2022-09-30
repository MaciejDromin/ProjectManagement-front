const url = process.env.BACKEND_URL

const api = async (method: string, endpoint?: string, accessToken?: string, body?: string) => {
    return await fetch(url + endpoint, {
        method: method,
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': accessToken
        }
    })
}

export { api }
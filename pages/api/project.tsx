import type { NextApiRequest, NextApiResponse } from 'next'

const url = 'http://localhost:8080/project'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { body } = req
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        res.status(201).json(await response.json())
    } else if (req.method === 'GET') {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        res.status(200).json(await response.json())
    } else if (req.method === 'DELETE') {
        const { id } = req.query
        const response = await fetch(url+'/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        res.status(200).json(await response.status)
    }
}
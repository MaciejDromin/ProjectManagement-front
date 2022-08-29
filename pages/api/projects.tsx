import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"

const url = 'http://localhost:8080/projects'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    console.log(session.accessToken)
    if (req.method === 'POST') {
        const { body } = req
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': session.accessToken as string
            }
        })
        res.status(201).json(await response.json())
    } else if (req.method === 'GET') {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': session.accessToken as string
            }
        })
        res.status(200).json(await response.json())
    } else if (req.method === 'DELETE') {
        const { id } = req.query
        const response = await fetch(url+'/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': session.accessToken as string
            }
        })
        res.status(200).json(await response.status)
    }
}
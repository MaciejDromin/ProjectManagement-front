import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { api } from "../../lib/api"

const endpoint = 'groups'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    let response: Response
    if (req.method === 'POST') {
        const { body } = req
        response = await api('POST', endpoint, session.accessToken as string, JSON.stringify(body))
    } else if (req.method === 'GET') {
        response = await api('GET', endpoint, session.accessToken as string)
    } else if (req.method === 'DELETE') {
        const { id } = req.query
        response = await api('DELETE', endpoint+'/'+id, session.accessToken as string)
    }
    res.status(response.status).json(await response.json())
}
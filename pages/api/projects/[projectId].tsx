import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { api } from "../../../lib/api"

const endpoint = 'projects/'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    let response: Response
    let ret: any
    if (req.method === 'GET') {
        const { projectId } = req.query
        response = await api('GET', endpoint + projectId, session.accessToken as string)
        ret = await response.json()
    }
    res.status(response.status).json(ret)
}
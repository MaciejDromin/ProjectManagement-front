import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { api } from "../../../../lib/api"

const endpoint = 'predefinedgroupstates/groups/'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    let response: Response
    const { groupId } = req.query
    if (req.method === 'POST') {
        const { body } = req
        response = await api('POST', endpoint + groupId, session.accessToken as string, JSON.stringify(body))
    } else if (req.method === 'GET') {
        response = await api('GET', endpoint + groupId, session.accessToken as string)
    }
    res.status(response.status).json(await response.json())
}
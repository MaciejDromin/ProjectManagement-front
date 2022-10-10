import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { api } from "../../../lib/api"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    let response: Response
    if (req.method === 'POST') {
        const { body } = req
        body.userSharing = session.user.id
        response = await api('POST', "groups/share", session.accessToken as string, JSON.stringify(body))
    } else if (req.method === 'GET') {
        response = await api('GET', "groups/users/" + session.user.id + "/shared", session.accessToken as string)
    }
    res.status(response.status).json(await response.json())
}
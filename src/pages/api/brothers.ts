import { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = ['Niklas', 'Felix', 'Daniel']
    // Mock deleay before sending response
    setTimeout(() => {
        res.status(200).json(data)
    }, 1500)
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { validate, calculate } from './lib'

type Error = {
    description: string | null
}

type APIResponse = {
    error : Error,
    data: any
}

const constructResponse = function (res: NextApiResponse<APIResponse>, status:number, description: string | null, data: any) {
     res.status(status).json(
        {
            error: {
                description: description
            },
            data: data
        }
    )
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    const query = req.query;
    const { userDOB } = query;

    try {
        validate(userDOB.toString());
        const response = calculate(userDOB.toString());
        constructResponse(res, 200, null, response);
    } catch(e) {
        constructResponse(res, 400, e.message, null)
    }
}

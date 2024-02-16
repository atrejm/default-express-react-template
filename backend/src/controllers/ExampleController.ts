import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

exports.exampleEndpoint = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    res.json({
        response: "exampleResponse"
    })
})

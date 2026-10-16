import type { NextFunction, Request, Response } from 'express'

const asyncHandler = (
    func: (
        req: Request,
        response: Response,
        next: NextFunction,
    ) => Promise<void>,
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(next)
    }
}

export default asyncHandler

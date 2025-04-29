import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { AuthenticatedRequest } from "./types/express"

export const middleware = (req : AuthenticatedRequest, res : Response, next : NextFunction) => {
    const authHeader = req.headers["authorization"]
    const word = authHeader?.split(" ");
    if (!authHeader || !word || word[0] != "Bearer") {
        return res.status(401).json({
            error: "Unauthorized"
        })
    }

    const token = word[1] as string;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = (decoded as JwtPayload).id;
        next()
    } catch (err) {
        return res.status(401).json({
            error: "Unauthorized"
        })
    }
}
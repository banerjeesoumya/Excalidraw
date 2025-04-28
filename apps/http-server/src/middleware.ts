import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"

export const middleware = (req : Request, res : Response, next : NextFunction) => {
    const authHeader = req.headers.get("Authorization")
    const word = authHeader?.split(" ");
    if (!authHeader || !word || word[0] != "Bearer") {
        return res.status(401).json({
            error: "Unauthorized"
        })
    }

    const token = word[1];
    try {
        const decoded = jwt.verify(token,JWT_SECRET) as string;
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({
            error: "Unauthorized"
        })
    }
}
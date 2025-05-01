import express from 'express';
import { SignUpSchema, SignInSchema } from '@repo/common/types';
import jwt from 'jsonwebtoken';
import { prisma } from '@repo/db/client'
import { middleware } from './middleware';
import { JWT_SECRET } from '@repo/backend-common/config';

const app = express();

app.use(express.json());
const port = 3005;

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    console.log(email, password, name);
    if (!email || !password || !name) {
        res.status(400).json({
            message: "Please provide all the fields"
        })
        return;
    }
    const correctSignUpBody = SignUpSchema.safeParse(req.body);
    if (!correctSignUpBody.success) {
        const errorMessage = correctSignUpBody.error.errors.map((error) => error.message)
        res.status(411).json({
            message: errorMessage
        })
        return;
    }
    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email: correctSignUpBody.data.email
            }
        })
        if (userExists) {
            res.status(400).json({
                message: "User already exists"
            })
        } else {
            const user = await prisma.user.create({
                data: {
                    email: correctSignUpBody.data.email,
                    password: correctSignUpBody.data.password,
                    name: correctSignUpBody.data.name
                }
            })

            res.status(200).json({
                message: "User signup successfull",
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Internal server error"
        })
        return;
    }
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        res.status(400).json({
            message: "Please provide all required fields"
        })
    }
    const correctSignInBody = SignInSchema.safeParse(req.body)
    if (!correctSignInBody.success) {
        const errorMessage = correctSignInBody.error.errors.map((error) => error.message)
        res.status(411).json({
            message: errorMessage
        })
        return;
    }
    try {
        const user = await prisma.user.findUnique({
            where:{
                email: correctSignInBody.data.email,
                password: correctSignInBody.data.password
            }
        })
        if (!user) {
            res.status(400).json({
                message: "Invalid credentials"
            })
            return; 
        }
        const token = jwt.sign({
            id: user.id
        }, JWT_SECRET)
        res.status(200).json({
            message: "User signin successfull",
            token: token,
            user: {
                email: user.email,
                name: user.name
            }
        })
        return;
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Internal server error"
        })
        return;
    }

})

app.post("/room", middleware, (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
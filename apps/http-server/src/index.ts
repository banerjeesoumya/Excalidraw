import express from 'express';
import { SignUpSchema, SignInSchema } from '@repo/common/types';
const app = express();

app.use(express.json());
const port = 3005;

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    if (!username || !password || !name) {
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
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
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

})

app.post("/room", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
import express from 'express';

const app = express();

const port = 3001;

app.post("/signup", (req, res) => {

});

app.post("/signin", (req, res) => {

})

app.post("/room", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
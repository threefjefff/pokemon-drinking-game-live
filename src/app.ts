import express from 'express';

const app = express();
const port = 42069; //blaze+nice

app.get('/', (req, res) => {
    res.send(`Hello! ${req.body}`);
})

app.listen(port, () => {
    return console.log(`listening on port ${port}`)
})

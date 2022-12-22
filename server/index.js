import express from 'express'
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import Route from './routes/route.js'
import cors from 'cors'

const app = express();
const PORT = 8000;

Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);



app.listen(PORT, () => {
    console.log(`Server is Runnning at port no ${PORT}`)
})


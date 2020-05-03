import express from 'express';
import data from './store';

const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati

app.use(express.json());


//igraci
app.get('/igraci', (req, res) => res.json(data.igraci));

//timovi
app.get('/timovi', (req, res) => res.json(data.timovi));

//pozivi
app.get('/pozivi/:igrac123', (req, res) => res.json(data.pozivi));

//chat
app.get('/chat/:dotakanal', (req, res) => res.json(data.chat));


app.listen(port, () => console.log(`Slušam na portu ${port}!`))

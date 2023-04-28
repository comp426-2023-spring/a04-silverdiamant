#!/usr/bin/env node 

import { rps, rpsls } from "./lib/rpsls.js"
import minimist from 'minimist';
import express from 'express';

// Creating an express object
const app = express(); 

// Create port from command line arg, defaults to 5000 if no arg
var args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Middleware (JSON URLEncoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check endpoint at /app/ that returns 200 OK
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
})

// /app/rps/ returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
  res.status(200).send(rps());
})

// /app/rpsls/ returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) =>{
  res.status(200).send(rpsls());
})

// /app/rps/play/ accepts URLEncoded, returns result
app.get('/app/rps/play/', (req, res) => {
  res.status(200).send(rps(req.query.shot));
})

// /app/rps/play/ accepts JSON, returns result
app.post('/app/rps/play/', (req, res) => {
  res.status(200).send(rps(req.body.shot));
})

// /app/rpsls/play/ accepts URLEncoded, returns result
app.get('/app/rpsls/play/', (req, res) => {
  res.status(200).send(rpsls(req.query.shot));
})

// /app/rpsls/play/ accepts JSON, returns result
app.post('/app/rpsls/play/', (req, res) => {
  res.status(200).send(rpsls(req.body.shot));
})

/* /app/rpsls/play/(rock|paper|scissors)/ returns {"player":"(rock|paper|
scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"} */
app.get('/app/rps/play/:shot', (req, res) =>{
  res.status(200).send(rps(req.params.shot));
})

/* /app/rpsls/play/(rock|paper|scissors|lizard|spock)/ 
returns {"player":"(rock|paper|scissors|lizard|spock)","opponent"
:"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}. */
app.get('/app/rpsls/play/:shot', (req, res) => {
  res.status(200).send(rpsls(req.params.shot));
})

// Undefined endpoints
app.get("*", (req, res) => {
  res.status(404).send("404 NOT FOUND");
})

// start server
app.listen(port, () => {
  console.log("listening at port 5000")
})






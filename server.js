#!/usr/bin/env node 

import { rps, rpsls } from "../lib/rpsls.js"
import minimist from 'minimist';
import express from 'express';

// Importing express module
const express = require('express'); 

// Creating an express object
const app = express(); 

// Create port from command line arg, defaults to 5000 if no arg
var args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check endpoint at /app/ that returns 200 OK
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
})

// Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
  res.status(200).send(rps());
})

/* Endpoint /app/rpsls/ that returns 
{"player":"(rock|paper|scissors|lizard|spock)"} */
app.get('/app/rpsls/', (req, res) =>{
  res.status(200).send(rpsls());
})

/* Endpoint /app/rps/play/ should accept request bodies in the following 
forms: shot=(rock|paper|scissors) (URLEncoded) or 
{"shot":"(rock|paper|scissors)"} (JSON) as data bodies and 
return {"player":"(rock|paper|scissors)",
"opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"} */ 
app.get('/app/rps/play/', (req, res) => {
  res.status(200).send(rps(args));
})

/* Endpoint /app/rpsls/play/ should accept request bodies in the 
following forms: shot=(rock|paper|scissors) (URLEncoded) or 
{"shot":"(rock|paper|scissors)"} (JSON) and return 
{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)",
"result":"(win|lose|tie)"} */
app.get('/app/rpsls/play', (req, res) => {
  res.status(200).send(rpsls(args));
})

/* Endpoint /app/rpsls/play/(rock|paper|scissors)/ should return 
{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)",
"result":"(win|lose|tie)"} */
app.get('/app/rpsls/play/(rock|paper|scissors)/', (req, res) =>{
  res.status(200).send(rps(args));
})

/* Endpoint /app/rpsls/play/(rock|paper|scissors|lizard|spock)/ 
should return {"player":"(rock|paper|scissors|lizard|spock)","opponent"
:"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}. */
app.get('/app/rpsls/play/(rock|paper|scissors|lizard|spock)/', (req, res) => {
  res.status(200).send(rpsls(args));
})



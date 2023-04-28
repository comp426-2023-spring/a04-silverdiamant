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
app.get('/app/', (req, res) {
  res.send('OK');
})




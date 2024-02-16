import { NextFunction, Request, Response } from "express";

const { exampleEndpoint } = require('../controllers/ExampleController')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', exampleEndpoint);

module.exports = router;

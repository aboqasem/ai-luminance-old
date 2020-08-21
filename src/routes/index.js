const express = require('express');
const data = require('../public/javascripts/data');
const brain = require('brain.js');
const functions = require('../public/javascripts/functions');

const net = new brain.NeuralNetwork();
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'AI Luminance', header: 'Start'});
});

/* POST home page. */
router.get('/start', function (req, res, next) {
  let rgb = functions.randomizeRGB();
  let colorForAI = functions.normalizeColorForAI(rgb);
  let likely = brain.likely(colorForAI, net);
  res.render('index', {header: likely, color: rgb});
});

/* Feeding dataSet the data. */
let dataSet = [];
dataSet.push(...data.dataSet);

/* Training the neural network. */
net.train(dataSet);

module.exports = router;
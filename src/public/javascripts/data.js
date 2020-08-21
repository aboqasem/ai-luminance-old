let functions = require('./functions');
let rl = require('./relative-luminance');

/* Trainable dataset. */
let dataSet = [];
generateRandomDataToFeed(dataSet, 500);

/**
 * Generates n number of data into the set.
 * @param set
 * @param n
 */
function generateRandomDataToFeed(set, n) {
  for (let i = 0; i < parseInt(n); ++i) {
    let {r, g, b} = functions.normalizeColorForAI(functions.randomizeRGB());
    let luminance = rl.luminance(rl.r(r), rl.r(g), rl.r(b));
    if (luminance > 0.5)
      set.push({input: {r: r.toFixed(2), g: g.toFixed(2), b: b.toFixed(2)}, output: {Light: 1}});
    else
      set.push({input: {r: r.toFixed(2), g: g.toFixed(2), b: b.toFixed(2)}, output: {Dark: 1}});
  }
}

module.exports = {dataSet}
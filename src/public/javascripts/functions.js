/**
 * Returns random RGB value as an object.
 * @returns {{r: number, b: number, g: number}}
 */
function randomizeRGB() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
}

/**
 * Takes an RGB value and normalizes it to sRGB.
 * @param r
 * @param g
 * @param b
 * @returns {{r: number, b: number, g: number}}
 */
function normalizeColorForAI({r, g, b}) {
  return {
    r: r / 255,
    g: g / 255,
    b: b / 255,
  };
}

module.exports = {randomizeRGB, normalizeColorForAI}
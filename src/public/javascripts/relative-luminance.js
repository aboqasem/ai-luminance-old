/*
  Note: this module has been created just to feed the dataSet in data module.
 */
/**
 * Takes an R or G or B value and returns it normalized between 0 - 1.
 * @param v
 * @returns {number}
 */
function s(v) {
  return parseFloat(v / 255);
}

/**
 * Takes an R or G or B value and returns it relative for luminance calculation.
 * @param v
 * @returns {number}
 */
function r(v) {
  if (v <= 0.03928)
    return parseFloat(v / 12.92);
  else
    return parseFloat(Math.pow(((v + 0.055) / 1.055), 2.4));
}

/**
 * Takes a relative sRGB value and returns its luminance.
 * Luminance function can be found at: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 * @param r
 * @param g
 * @param b
 * @returns {number}
 */
function luminance(r, g, b) {
  return parseFloat(0.2126 * r + 0.7152 * g + 0.0722 * b);
}

module.exports = {s, r, luminance}
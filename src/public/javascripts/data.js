let functions = require('./functions');
let rl = require('./relative-luminance');
/* Trainable dataset. */
const dataSet = [
  {input: {r: 0.62, g: 0.72, b: 0.88}, output: {Light: 1}},
  {input: {r: 0.1, g: 0.84, b: 0.72}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.24, b: 0.29}, output: {Dark: 1}},
  {input: {r: 0.48, g: 1.00, b: 0.93}, output: {Dark: 1}},
  {input: {r: 0.44, g: 0.93, b: 0.14}, output: {Dark: 1}},
  {input: {r: 0.38, g: 0.22, b: 0.17}, output: {Light: 1}},
  {input: {r: 1.00, g: 0.30, b: 0.15}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.78, b: 0.70}, output: {Light: 1}},
  {input: {r: 0.52, g: 0.13, b: 0.50}, output: {Light: 1}},
  {input: {r: 0.36, g: 0.08, b: 0.70}, output: {Light: 1}},
  {input: {r: 0.61, g: 0.27, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.09, b: 0.72}, output: {Light: 1}},
  {input: {r: 0.80, g: 0.20, b: 0.69}, output: {Light: 1}},
  {input: {r: 0.32, g: 0.49, b: 0.98}, output: {Light: 1}},
  {input: {r: 0.43, g: 0.59, b: 0.24}, output: {Light: 1}},
  {input: {r: 0.08, g: 0.42, b: 0.53}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.27, b: 0.65}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.57, b: 0.46}, output: {Light: 1}},
  {input: {r: 0.45, g: 0.44, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.23, g: 0.40, b: 0.52}, output: {Light: 1}},
  {input: {r: 0.94, g: 0.92, b: 0.54}, output: {Dark: 1}},
  {input: {r: 0.71, g: 0.58, b: 0.65}, output: {Light: 1}},
  {input: {r: 0.80, g: 0.05, b: 0.93}, output: {Light: 1}},
  {input: {r: 0.56, g: 0.83, b: 0.67}, output: {Dark: 1}},
  {input: {r: 0.51, g: 0.59, b: 0.98}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.58, b: 0.38}, output: {Light: 1}},
  {input: {r: 0.65, g: 0.33, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.54, g: 0.37, b: 0.28}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.94, b: 0.96}, output: {Dark: 1}},
  {input: {r: 0.09, g: 0.09, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.56, g: 0.27, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.05, g: 0.92, b: 0.43}, output: {Dark: 1}},
  {input: {r: 0.98, g: 0.22, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.47, g: 0.08, b: 0.89}, output: {Light: 1}},
  {input: {r: 0.09, g: 0.60, b: 0.12}, output: {Light: 1}},
  {input: {r: 0.99, g: 0.04, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.56, g: 0.61, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.47, g: 0.20, b: 0.29}, output: {Light: 1}},
  {input: {r: 0.00, g: 0.04, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.17, g: 0.55, b: 0.20}, output: {Light: 1}},
  {input: {r: 0.91, g: 0.30, b: 0.48}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.99, b: 0.35}, output: {Dark: 1}},
  {input: {r: 0.21, g: 0.78, b: 0.12}, output: {Light: 1}},
  {input: {r: 0.86, g: 0.53, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.74, g: 0.36, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.68, g: 0.20, b: 0.77}, output: {Light: 1}},
  {input: {r: 0.26, g: 0.22, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.72, g: 0.84, b: 0.36}, output: {Dark: 1}},
  {input: {r: 0.82, g: 0.81, b: 0.01}, output: {Dark: 1}},
  {input: {r: 0.93, g: 0.99, b: 0.33}, output: {Dark: 1}},
  {input: {r: 0.81, g: 0.63, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.31, g: 0.16, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.26, g: 0.41, b: 0.05}, output: {Light: 1}},
  {input: {r: 0.90, g: 0.55, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.45, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.11, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.36, b: 0.54}, output: {Light: 1}},
  {input: {r: 0.46, g: 0.71, b: 0.89}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.97, b: 0.80}, output: {Dark: 1}},
  {input: {r: 0.85, g: 0.74, b: 0.29}, output: {Dark: 1}},
  {input: {r: 0.98, g: 0.33, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.26, g: 0.78, b: 0.66}, output: {Light: 1}},
  {input: {r: 0.18, g: 0.71, b: 0.58}, output: {Light: 1}},
  {input: {r: 0.81, g: 0.57, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.93, g: 0.63, b: 0.62}, output: {Light: 1}},
  {input: {r: 0.93, g: 0.60, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.85, b: 0.19}, output: {Dark: 1}},
  {input: {r: 0.34, g: 0.94, b: 0.20}, output: {Dark: 1}},
  {input: {r: 0.18, g: 0.85, b: 0.46}, output: {Dark: 1}},
  {input: {r: 0.54, g: 1.00, b: 0.87}, output: {Dark: 1}},
  {input: {r: 0.18, g: 0.97, b: 0.33}, output: {Dark: 1}},
  {input: {r: 0.90, g: 0.13, b: 0.61}, output: {Light: 1}},
  {input: {r: 0.97, g: 0.21, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.52, g: 0.02, b: 0.43}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.76, b: 0.90}, output: {Light: 1}},
  {input: {r: 0.96, g: 0.38, b: 0.33}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.62, b: 0.52}, output: {Light: 1}},
  {input: {r: 0.12, g: 0.65, b: 0.62}, output: {Light: 1}},
  {input: {r: 0.46, g: 0.71, b: 0.83}, output: {Light: 1}},
  {input: {r: 0.83, g: 0.11, b: 0.92}, output: {Light: 1}},
  {input: {r: 0.63, g: 0.94, b: 0.69}, output: {Dark: 1}},
  {input: {r: 0.05, g: 0.14, b: 0.82}, output: {Light: 1}},
  {input: {r: 0.20, g: 0.18, b: 0.45}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.55, b: 0.55}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.78, b: 0.91}, output: {Dark: 1}},
  {input: {r: 0.26, g: 0.29, b: 0.58}, output: {Light: 1}},
  {input: {r: 0.60, g: 0.44, b: 0.60}, output: {Light: 1}},
  {input: {r: 0.09, g: 0.38, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.23, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.32, g: 0.03, b: 0.39}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.84, b: 0.44}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.84, b: 0.64}, output: {Dark: 1}},
  {input: {r: 0.94, g: 0.03, b: 0.65}, output: {Light: 1}},
  {input: {r: 0.65, g: 0.11, b: 0.61}, output: {Light: 1}},
  {input: {r: 0.94, g: 0.10, b: 0.08}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.01, b: 0.10}, output: {Light: 1}},
  {input: {r: 0.82, g: 0.44, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.44, b: 0.05}, output: {Light: 1}},
  {input: {r: 0.55, g: 0.23, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.88, b: 0.29}, output: {Dark: 1}},
  {input: {r: 0.41, g: 0.03, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.73, g: 0.84, b: 0.39}, output: {Dark: 1}},
  {input: {r: 0.51, g: 0.36, b: 0.61}, output: {Light: 1}},
  {input: {r: 0.16, g: 0.25, b: 0.16}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.05, b: 0.96}, output: {Light: 1}},
  {input: {r: 0.10, g: 0.63, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.32, g: 0.94, b: 0.53}, output: {Dark: 1}},
  {input: {r: 0.84, g: 0.87, b: 0.85}, output: {Dark: 1}},
  {input: {r: 0.27, g: 1.00, b: 0.07}, output: {Dark: 1}},
  {input: {r: 0.24, g: 0.27, b: 0.20}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.02, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.23, b: 0.03}, output: {Light: 1}},
  {input: {r: 0.45, g: 0.73, b: 0.44}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.81, b: 0.87}, output: {Dark: 1}},
  {input: {r: 0.45, g: 0.24, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.97, g: 0.65, b: 0.98}, output: {Dark: 1}},
  {input: {r: 0.74, g: 0.58, b: 0.92}, output: {Light: 1}},
  {input: {r: 0.93, g: 0.14, b: 0.79}, output: {Light: 1}},
  {input: {r: 0.71, g: 0.71, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.76, g: 0.38, b: 0.33}, output: {Light: 1}},
  {input: {r: 0.42, g: 1.00, b: 0.57}, output: {Dark: 1}},
  {input: {r: 0.36, g: 0.35, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.93, g: 0.84, b: 0.67}, output: {Dark: 1}},
  {input: {r: 0.98, g: 0.98, b: 0.18}, output: {Dark: 1}},
  {input: {r: 0.07, g: 0.94, b: 0.38}, output: {Dark: 1}},
  {input: {r: 0.95, g: 0.01, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.94, b: 0.07}, output: {Dark: 1}},
  {input: {r: 0.39, g: 0.05, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.57, g: 0.61, b: 0.43}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.79, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.99, g: 0.60, b: 1.00}, output: {Dark: 1}},
  {input: {r: 0.09, g: 0.13, b: 0.03}, output: {Light: 1}},
  {input: {r: 0.67, g: 0.19, b: 0.97}, output: {Light: 1}},
  {input: {r: 0.13, g: 0.27, b: 0.68}, output: {Light: 1}},
  {input: {r: 0.08, g: 0.01, b: 0.06}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.64, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.00, b: 0.86}, output: {Light: 1}},
  {input: {r: 0.45, g: 0.85, b: 0.13}, output: {Dark: 1}},
  {input: {r: 0.84, g: 0.07, b: 0.20}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.93, b: 0.92}, output: {Dark: 1}},
  {input: {r: 0.48, g: 0.25, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.67, g: 0.00, b: 0.57}, output: {Light: 1}},
  {input: {r: 0.08, g: 0.24, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.40, g: 0.05, b: 0.50}, output: {Light: 1}},
  {input: {r: 0.59, g: 0.49, b: 0.97}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.43, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.31, g: 0.49, b: 0.39}, output: {Light: 1}},
  {input: {r: 0.65, g: 0.27, b: 0.19}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.07, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.09, g: 0.89, b: 0.13}, output: {Dark: 1}},
  {input: {r: 0.88, g: 0.87, b: 0.87}, output: {Dark: 1}},
  {input: {r: 0.66, g: 0.40, b: 0.63}, output: {Light: 1}},
  {input: {r: 0.28, g: 0.57, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.77, g: 0.69, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.08, g: 0.29, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.40, g: 0.22, b: 0.62}, output: {Light: 1}},
  {input: {r: 0.54, g: 0.69, b: 0.53}, output: {Light: 1}},
  {input: {r: 0.54, g: 0.81, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.18, g: 0.55, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.16, b: 0.99}, output: {Light: 1}},
  {input: {r: 0.71, g: 0.45, b: 0.12}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.30, b: 0.07}, output: {Light: 1}},
  {input: {r: 0.23, g: 0.54, b: 0.17}, output: {Light: 1}},
  {input: {r: 0.30, g: 0.09, b: 0.64}, output: {Light: 1}},
  {input: {r: 0.75, g: 0.61, b: 0.09}, output: {Light: 1}},
  {input: {r: 0.89, g: 0.12, b: 0.96}, output: {Light: 1}},
  {input: {r: 0.70, g: 0.54, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.54, g: 0.91, b: 0.10}, output: {Dark: 1}},
  {input: {r: 0.93, g: 0.75, b: 1.00}, output: {Dark: 1}},
  {input: {r: 0.23, g: 0.56, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.82, g: 0.31, b: 0.50}, output: {Light: 1}},
  {input: {r: 0.70, g: 0.57, b: 0.59}, output: {Light: 1}},
  {input: {r: 0.12, g: 0.15, b: 0.46}, output: {Light: 1}},
  {input: {r: 0.69, g: 0.76, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.13, g: 0.36, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.17, g: 0.75, b: 0.81}, output: {Light: 1}},
  {input: {r: 0.47, g: 0.18, b: 0.94}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.24, b: 0.33}, output: {Light: 1}},
  {input: {r: 0.85, g: 0.69, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.14, g: 0.12, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.31, g: 0.53, b: 0.92}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.36, b: 0.34}, output: {Light: 1}},
  {input: {r: 0.12, g: 0.18, b: 0.77}, output: {Light: 1}},
  {input: {r: 0.06, g: 0.59, b: 0.03}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.26, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.45, g: 0.61, b: 0.46}, output: {Light: 1}},
  {input: {r: 0.23, g: 0.52, b: 0.15}, output: {Light: 1}},
  {input: {r: 0.69, g: 0.52, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.89, g: 0.18, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.93, b: 0.05}, output: {Dark: 1}},
  {input: {r: 0.79, g: 0.79, b: 0.77}, output: {Dark: 1}},
  {input: {r: 0.29, g: 0.38, b: 0.13}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.55, b: 0.20}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.07, b: 0.28}, output: {Light: 1}},
  {input: {r: 0.92, g: 0.46, b: 0.15}, output: {Light: 1}},
  {input: {r: 0.47, g: 0.68, b: 0.19}, output: {Light: 1}},
  {input: {r: 0.85, g: 0.89, b: 0.61}, output: {Dark: 1}},
  {input: {r: 0.73, g: 0.30, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.65, g: 0.11, b: 0.82}, output: {Light: 1}},
  {input: {r: 0.34, g: 0.45, b: 0.96}, output: {Light: 1}},
  {input: {r: 0.77, g: 0.97, b: 0.51}, output: {Dark: 1}},
  {input: {r: 0.51, g: 0.52, b: 0.17}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.24, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.88, g: 0.84, b: 0.67}, output: {Dark: 1}},
  {input: {r: 0.08, g: 0.77, b: 0.09}, output: {Light: 1}},
  {input: {r: 0.10, g: 0.07, b: 0.55}, output: {Light: 1}},
  {input: {r: 0.30, g: 0.91, b: 0.44}, output: {Dark: 1}},
  {input: {r: 0.74, g: 0.25, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.54, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.86, g: 0.57, b: 0.93}, output: {Light: 1}},
  {input: {r: 0.23, g: 0.29, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.72, g: 0.32, b: 0.80}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.92, b: 0.50}, output: {Dark: 1}},
  {input: {r: 0.79, g: 0.65, b: 0.19}, output: {Light: 1}},
  {input: {r: 0.17, g: 0.60, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.69, g: 0.22, b: 0.55}, output: {Light: 1}},
  {input: {r: 0.77, g: 0.57, b: 0.64}, output: {Light: 1}},
  {input: {r: 0.89, g: 0.48, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.85, g: 0.69, b: 0.09}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.24, b: 0.69}, output: {Light: 1}},
  {input: {r: 0.59, g: 0.35, b: 0.09}, output: {Light: 1}},
  {input: {r: 0.44, g: 0.37, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.73, b: 0.53}, output: {Light: 1}},
  {input: {r: 0.99, g: 0.19, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.92, b: 0.71}, output: {Dark: 1}},
  {input: {r: 0.17, g: 0.07, b: 0.86}, output: {Light: 1}},
  {input: {r: 0.01, g: 0.38, b: 0.26}, output: {Light: 1}},
  {input: {r: 0.94, g: 0.68, b: 0.56}, output: {Dark: 1}},
  {input: {r: 0.21, g: 0.96, b: 0.65}, output: {Dark: 1}},
  {input: {r: 0.22, g: 0.15, b: 0.23}, output: {Light: 1}},
  {input: {r: 0.57, g: 0.19, b: 0.86}, output: {Light: 1}},
  {input: {r: 0.74, g: 0.16, b: 0.18}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.73, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.01, g: 0.67, b: 0.18}, output: {Light: 1}},
  {input: {r: 0.44, g: 0.85, b: 0.61}, output: {Dark: 1}},
  {input: {r: 0.50, g: 0.64, b: 0.58}, output: {Light: 1}},
  {input: {r: 0.34, g: 0.39, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.41, g: 0.02, b: 0.86}, output: {Light: 1}},
  {input: {r: 0.49, g: 0.65, b: 0.01}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.25, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.66, b: 0.51}, output: {Light: 1}},
  {input: {r: 0.91, g: 0.89, b: 0.78}, output: {Dark: 1}},
  {input: {r: 0.93, g: 0.76, b: 0.93}, output: {Dark: 1}},
  {input: {r: 0.78, g: 0.82, b: 0.78}, output: {Dark: 1}},
  {input: {r: 0.24, g: 0.77, b: 0.62}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.56, b: 0.80}, output: {Light: 1}},
  {input: {r: 0.52, g: 0.89, b: 0.95}, output: {Dark: 1}},
  {input: {r: 0.93, g: 0.53, b: 0.19}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.50, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.61, b: 0.57}, output: {Light: 1}},
  {input: {r: 0.77, g: 0.64, b: 0.41}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.33, b: 0.22}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.67, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.28, g: 0.65, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.05, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.39, g: 0.27, b: 0.94}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.83, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.33, b: 0.89}, output: {Light: 1}},
  {input: {r: 0.61, g: 0.69, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.71, g: 0.62, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.06, b: 0.83}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.11, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.49, b: 0.03}, output: {Light: 1}},
  {input: {r: 0.67, g: 0.33, b: 0.72}, output: {Light: 1}},
  {input: {r: 0.96, g: 0.43, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.73, g: 0.20, b: 0.16}, output: {Light: 1}},
  {input: {r: 0.18, g: 0.98, b: 0.07}, output: {Dark: 1}},
  {input: {r: 0.40, g: 0.37, b: 0.48}, output: {Light: 1}},
  {input: {r: 0.88, g: 0.07, b: 0.80}, output: {Light: 1}},
  {input: {r: 0.68, g: 0.70, b: 0.25}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.05, b: 0.99}, output: {Light: 1}},
  {input: {r: 0.92, g: 0.16, b: 0.05}, output: {Light: 1}},
  {input: {r: 0.52, g: 0.62, b: 0.38}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.20, b: 0.12}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.82, b: 0.13}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.78, b: 0.17}, output: {Dark: 1}},
  {input: {r: 0.46, g: 0.69, b: 0.80}, output: {Light: 1}},
  {input: {r: 0.31, g: 0.29, b: 0.03}, output: {Light: 1}},
  {input: {r: 0.04, g: 0.00, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.15, b: 0.00}, output: {Light: 1}},
  {input: {r: 0.72, g: 0.47, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.71, g: 0.45, b: 0.60}, output: {Light: 1}},
  {input: {r: 0.39, g: 0.22, b: 0.25}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.59, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.63, b: 0.43}, output: {Light: 1}},
  {input: {r: 0.13, g: 0.24, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.99, g: 0.83, b: 0.22}, output: {Dark: 1}},
  {input: {r: 0.03, g: 0.86, b: 0.13}, output: {Dark: 1}},
  {input: {r: 0.83, g: 0.25, b: 0.97}, output: {Light: 1}},
  {input: {r: 0.11, g: 0.39, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.63, g: 0.65, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.97, b: 0.83}, output: {Dark: 1}},
  {input: {r: 0.76, g: 0.07, b: 0.89}, output: {Light: 1}},
  {input: {r: 0.76, g: 0.25, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.19, b: 0.61}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.13, b: 0.98}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.95, b: 0.91}, output: {Dark: 1}},
  {input: {r: 0.84, g: 0.53, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.18, b: 0.91}, output: {Light: 1}},
  {input: {r: 0.05, g: 0.61, b: 0.60}, output: {Light: 1}},
  {input: {r: 0.38, g: 0.07, b: 0.76}, output: {Light: 1}},
  {input: {r: 0.14, g: 0.49, b: 0.43}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.38, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.67, b: 0.14}, output: {Light: 1}},
  {input: {r: 0.20, g: 0.69, b: 0.10}, output: {Light: 1}},
  {input: {r: 0.55, g: 0.42, b: 0.94}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.44, b: 0.51}, output: {Light: 1}},
  {input: {r: 0.83, g: 0.09, b: 0.88}, output: {Light: 1}},
  {input: {r: 0.01, g: 1.00, b: 0.15}, output: {Dark: 1}},
  {input: {r: 0.47, g: 0.98, b: 0.21}, output: {Dark: 1}},
  {input: {r: 0.04, g: 0.45, b: 0.28}, output: {Light: 1}},
  {input: {r: 0.81, g: 0.20, b: 0.42}, output: {Light: 1}},
  {input: {r: 0.82, g: 0.94, b: 0.80}, output: {Dark: 1}},
  {input: {r: 0.98, g: 0.41, b: 0.85}, output: {Light: 1}},
  {input: {r: 0.25, g: 0.88, b: 0.03}, output: {Dark: 1}},
  {input: {r: 0.49, g: 0.29, b: 0.22}, output: {Light: 1}},
  {input: {r: 0.38, g: 0.67, b: 0.66}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.95, b: 0.35}, output: {Dark: 1}},
  {input: {r: 0.16, g: 0.47, b: 0.77}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.29, b: 0.16}, output: {Light: 1}},
  {input: {r: 0.96, g: 0.62, b: 0.56}, output: {Light: 1}},
  {input: {r: 0.38, g: 0.53, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.37, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.48, g: 0.02, b: 0.36}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.48, b: 0.76}, output: {Light: 1}},
  {input: {r: 0.09, g: 0.60, b: 0.76}, output: {Light: 1}},
  {input: {r: 0.53, g: 0.84, b: 0.44}, output: {Dark: 1}},
  {input: {r: 0.25, g: 0.82, b: 0.25}, output: {Light: 1}},
  {input: {r: 0.89, g: 0.40, b: 0.54}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.06, b: 0.56}, output: {Light: 1}},
  {input: {r: 0.88, g: 0.00, b: 0.69}, output: {Light: 1}},
  {input: {r: 0.50, g: 0.68, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.52, g: 0.86, b: 0.37}, output: {Dark: 1}},
  {input: {r: 0.35, g: 0.46, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.67, g: 0.46, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.85, g: 0.77, b: 0.18}, output: {Dark: 1}},
  {input: {r: 0.67, g: 0.80, b: 0.31}, output: {Dark: 1}},
  {input: {r: 0.14, g: 0.91, b: 0.85}, output: {Dark: 1}},
  {input: {r: 0.84, g: 0.82, b: 0.85}, output: {Dark: 1}},
  {input: {r: 0.89, g: 0.74, b: 0.65}, output: {Dark: 1}},
  {input: {r: 0.80, g: 0.67, b: 0.95}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.78, b: 0.45}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.14, b: 0.76}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.91, b: 0.84}, output: {Dark: 1}},
  {input: {r: 0.65, g: 0.27, b: 0.68}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.16, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.53, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.19, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.83, g: 0.50, b: 0.17}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.65, b: 0.33}, output: {Light: 1}},
  {input: {r: 0.65, g: 0.16, b: 0.29}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.60, b: 0.20}, output: {Light: 1}},
  {input: {r: 0.44, g: 0.85, b: 0.48}, output: {Dark: 1}},
  {input: {r: 0.17, g: 0.36, b: 0.17}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.51, b: 0.00}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.96, b: 1.00}, output: {Dark: 1}},
  {input: {r: 0.04, g: 0.82, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.58, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.34, g: 0.95, b: 0.53}, output: {Dark: 1}},
  {input: {r: 0.73, g: 0.83, b: 0.80}, output: {Dark: 1}},
  {input: {r: 0.25, g: 0.69, b: 0.13}, output: {Light: 1}},
  {input: {r: 0.74, g: 0.70, b: 0.18}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.11, b: 0.64}, output: {Light: 1}},
  {input: {r: 0.76, g: 0.53, b: 0.29}, output: {Light: 1}},
  {input: {r: 0.43, g: 0.64, b: 0.26}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.00, b: 0.80}, output: {Light: 1}},
  {input: {r: 0.94, g: 0.40, b: 0.68}, output: {Light: 1}},
  {input: {r: 0.53, g: 0.46, b: 0.06}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.40, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.89, b: 0.19}, output: {Dark: 1}},
  {input: {r: 0.21, g: 0.12, b: 0.52}, output: {Light: 1}},
  {input: {r: 0.62, g: 0.85, b: 0.64}, output: {Dark: 1}},
  {input: {r: 0.48, g: 0.98, b: 0.68}, output: {Dark: 1}},
  {input: {r: 0.78, g: 0.91, b: 0.98}, output: {Dark: 1}},
  {input: {r: 0.24, g: 0.42, b: 0.91}, output: {Light: 1}},
  {input: {r: 0.78, g: 0.07, b: 0.53}, output: {Light: 1}},
  {input: {r: 0.54, g: 0.57, b: 0.08}, output: {Light: 1}},
  {input: {r: 0.29, g: 0.27, b: 0.05}, output: {Light: 1}},
  {input: {r: 0.76, g: 0.31, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.96, b: 0.45}, output: {Dark: 1}},
  {input: {r: 0.27, g: 0.24, b: 0.15}, output: {Light: 1}},
  {input: {r: 0.80, g: 0.89, b: 0.51}, output: {Dark: 1}},
  {input: {r: 0.09, g: 0.35, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.57, g: 0.75, b: 0.53}, output: {Light: 1}},
  {input: {r: 0.62, g: 0.63, b: 0.00}, output: {Light: 1}},
  {input: {r: 0.30, g: 0.94, b: 0.29}, output: {Dark: 1}},
  {input: {r: 0.07, g: 0.82, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.71, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.40, g: 0.85, b: 0.83}, output: {Dark: 1}},
  {input: {r: 0.36, g: 0.07, b: 0.56}, output: {Light: 1}},
  {input: {r: 0.43, g: 0.96, b: 0.48}, output: {Dark: 1}},
  {input: {r: 0.95, g: 0.19, b: 0.69}, output: {Light: 1}},
  {input: {r: 0.13, g: 0.74, b: 0.77}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.80, b: 0.10}, output: {Light: 1}},
  {input: {r: 0.20, g: 0.98, b: 0.96}, output: {Dark: 1}},
  {input: {r: 0.40, g: 0.30, b: 0.86}, output: {Light: 1}},
  {input: {r: 0.20, g: 0.55, b: 0.51}, output: {Light: 1}},
  {input: {r: 0.84, g: 1.00, b: 0.71}, output: {Dark: 1}},
  {input: {r: 0.14, g: 0.87, b: 0.42}, output: {Dark: 1}},
  {input: {r: 0.31, g: 0.22, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.96, g: 0.02, b: 0.29}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.53, b: 0.47}, output: {Light: 1}},
  {input: {r: 0.43, g: 0.40, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.68, g: 0.87, b: 0.80}, output: {Dark: 1}},
  {input: {r: 0.51, g: 0.33, b: 0.72}, output: {Light: 1}},
  {input: {r: 0.81, g: 0.55, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.21, g: 0.78, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.21, g: 0.07, b: 0.84}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.78, b: 0.31}, output: {Dark: 1}},
  {input: {r: 0.20, g: 0.60, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.00, g: 0.15, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.02, g: 0.16, b: 0.14}, output: {Light: 1}},
  {input: {r: 0.91, g: 0.89, b: 0.02}, output: {Dark: 1}},
  {input: {r: 0.21, g: 0.90, b: 1.00}, output: {Dark: 1}},
  {input: {r: 0.08, g: 0.29, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.90, b: 0.42}, output: {Dark: 1}},
  {input: {r: 0.73, g: 0.39, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.09, g: 0.76, b: 0.13}, output: {Light: 1}},
  {input: {r: 0.24, g: 0.91, b: 0.30}, output: {Dark: 1}},
  {input: {r: 0.83, g: 0.78, b: 0.26}, output: {Dark: 1}},
  {input: {r: 0.65, g: 0.77, b: 0.76}, output: {Dark: 1}},
  {input: {r: 0.36, g: 0.15, b: 0.14}, output: {Light: 1}},
  {input: {r: 0.37, g: 0.11, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.17, g: 0.13, b: 0.25}, output: {Light: 1}},
  {input: {r: 0.39, g: 0.63, b: 0.83}, output: {Light: 1}},
  {input: {r: 0.86, g: 0.24, b: 0.96}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.12, b: 0.27}, output: {Light: 1}},
  {input: {r: 0.96, g: 0.02, b: 0.06}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.71, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.25, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.22, g: 0.44, b: 0.32}, output: {Light: 1}},
  {input: {r: 0.38, g: 0.49, b: 0.58}, output: {Light: 1}},
  {input: {r: 0.33, g: 0.56, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.55, g: 0.51, b: 0.40}, output: {Light: 1}},
  {input: {r: 0.63, g: 0.42, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.20, g: 0.96, b: 0.82}, output: {Dark: 1}},
  {input: {r: 0.16, g: 0.91, b: 0.38}, output: {Dark: 1}},
  {input: {r: 0.24, g: 0.13, b: 0.34}, output: {Light: 1}},
  {input: {r: 0.15, g: 0.77, b: 0.93}, output: {Light: 1}},
  {input: {r: 0.01, g: 0.26, b: 0.72}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.85, b: 0.94}, output: {Dark: 1}},
  {input: {r: 0.35, g: 0.35, b: 0.08}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.47, b: 0.96}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.95, b: 0.62}, output: {Dark: 1}},
  {input: {r: 0.58, g: 0.60, b: 0.50}, output: {Light: 1}},
  {input: {r: 0.46, g: 0.08, b: 0.67}, output: {Light: 1}},
  {input: {r: 0.97, g: 0.49, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.10, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.62, b: 0.35}, output: {Light: 1}},
  {input: {r: 0.07, g: 0.06, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.44, g: 0.35, b: 0.64}, output: {Light: 1}},
  {input: {r: 0.27, g: 0.57, b: 0.93}, output: {Light: 1}},
  {input: {r: 0.88, g: 0.38, b: 0.71}, output: {Light: 1}},
  {input: {r: 0.51, g: 0.18, b: 0.91}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.07, b: 0.89}, output: {Light: 1}},
  {input: {r: 0.79, g: 0.60, b: 0.37}, output: {Light: 1}},
  {input: {r: 0.10, g: 0.45, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.35, g: 1.00, b: 0.91}, output: {Dark: 1}},
  {input: {r: 0.93, g: 0.49, b: 0.91}, output: {Light: 1}},
  {input: {r: 0.03, g: 0.97, b: 0.31}, output: {Dark: 1}},
  {input: {r: 0.67, g: 0.66, b: 0.31}, output: {Light: 1}},
  {input: {r: 0.93, g: 0.70, b: 0.78}, output: {Dark: 1}},
  {input: {r: 0.39, g: 0.11, b: 0.74}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.27, b: 0.24}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.66, b: 0.49}, output: {Light: 1}},
  {input: {r: 0.95, g: 0.52, b: 0.24}, output: {Light: 1}},
  {input: {r: 0.75, g: 0.55, b: 0.91}, output: {Light: 1}},
  {input: {r: 0.17, g: 0.27, b: 0.62}, output: {Light: 1}},
  {input: {r: 0.97, g: 0.61, b: 0.30}, output: {Light: 1}},
  {input: {r: 0.46, g: 0.93, b: 0.73}, output: {Dark: 1}},
  {input: {r: 0.55, g: 0.46, b: 0.07}, output: {Light: 1}},
  {input: {r: 0.44, g: 0.80, b: 0.88}, output: {Dark: 1}},
  {input: {r: 0.38, g: 0.33, b: 0.04}, output: {Light: 1}},
  {input: {r: 0.84, g: 0.47, b: 0.43}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.09, b: 0.75}, output: {Light: 1}},
  {input: {r: 0.71, g: 0.80, b: 0.66}, output: {Dark: 1}},
  {input: {r: 0.47, g: 0.87, b: 0.12}, output: {Dark: 1}},
  {input: {r: 0.33, g: 0.79, b: 0.25}, output: {Light: 1}},
  {input: {r: 0.45, g: 0.93, b: 0.20}, output: {Dark: 1}},
  {input: {r: 0.20, g: 0.59, b: 0.50}, output: {Light: 1}},
  {input: {r: 0.62, g: 0.76, b: 0.73}, output: {Light: 1}},
  {input: {r: 0.64, g: 0.54, b: 0.24}, output: {Light: 1}},
  {input: {r: 0.98, g: 0.05, b: 0.68}, output: {Light: 1}},
  {input: {r: 0.97, g: 0.46, b: 0.39}, output: {Light: 1}},
  {input: {r: 0.13, g: 0.35, b: 0.19}, output: {Light: 1}},
  {input: {r: 0.67, g: 0.42, b: 0.11}, output: {Light: 1}},
  {input: {r: 0.48, g: 0.04, b: 0.61}, output: {Light: 1}},
  {input: {r: 0.26, g: 0.73, b: 0.58}, output: {Light: 1}},
  {input: {r: 0.76, g: 0.51, b: 0.51}, output: {Light: 1}},
  {input: {r: 0.32, g: 0.09, b: 0.48}, output: {Light: 1}},
  {input: {r: 0.05, g: 0.35, b: 0.17}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.42, b: 0.52}, output: {Light: 1}},
  {input: {r: 0.53, g: 0.06, b: 0.77}, output: {Light: 1}},
  {input: {r: 0.74, g: 0.44, b: 0.29}, output: {Light: 1}},
  {input: {r: 0.05, g: 0.68, b: 0.97}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.16, b: 0.85}, output: {Light: 1}},
  {input: {r: 0.55, g: 0.92, b: 0.47}, output: {Dark: 1}},
  {input: {r: 0.58, g: 0.30, b: 0.02}, output: {Light: 1}},
  {input: {r: 0.53, g: 0.09, b: 0.67}, output: {Light: 1}},
  {input: {r: 0.58, g: 0.25, b: 0.24}, output: {Light: 1}},
  {input: {r: 0.42, g: 0.80, b: 0.66}, output: {Light: 1}},
  {input: {r: 0.35, g: 0.24, b: 0.87}, output: {Light: 1}},
  {input: {r: 0.79, g: 0.47, b: 0.92}, output: {Light: 1}},
  {input: {r: 0.74, g: 0.78, b: 0.86}, output: {Light: 1}}
];

/**
 * Generates data to feed the dataSet.
 * @param number
 */
function generateRandomDataToFeed(number) {
  for (let i = 0; i < parseInt(number); ++i) {
    let {r, g, b} = functions.normalizeColorForAI(functions.randomizeRGB());
    let luminance = rl.luminance(rl.r(r), rl.r(g), rl.r(b));
    if (luminance < 0.5)
      console.log(`{input: {r: ${r.toFixed(2)}, g: ${g.toFixed(2)}, b: ${b.toFixed(2)}}, output: {Light: 1}},`);
    else
      console.log(`{input: {r: ${r.toFixed(2)}, g: ${g.toFixed(2)}, b: ${b.toFixed(2)}}, output: {Dark: 1}},`);
  }
}

module.exports = {dataSet}
//outputs a randomly generated color and shows the HEX value for that color
// can show hue (e.g. green or red or blue) and luminosity (e.g. light or dark) if input in the format "node index.js blue" or "node index index.js blue dark"

import chalk from 'chalk';
import colornames from 'colornames';
import shader from 'shader';

const randomHexNumber = Math.floor(Math.random() * 16777215).toString(16);
const randomHexNumberFormatted = '#' + randomHexNumber;
const backgroundHashtags = '#################################';
const backgroundHashtags2 = '#####       ';
const backgroundHashtags3 = '       #####';
const backgroundEmpty = '       ';
let outputColor = null;
let amendedColor = null;
let tempColor = null;

const inputColor = colornames(process.argv[2]);

const notARandomColor = Boolean(process.argv[2]);

if (process.argv.length > 2) {
  outputColor = inputColor;
} else {
  outputColor = randomHexNumberFormatted;
}

if (process.argv[3] === 'dark') {
  amendedColor = shader(inputColor, -0.5);
} else if (process.argv[3] === 'light') {
  amendedColor = shader(inputColor, 0.5);
} else if (process.argv[3] !== 'dark') {
  amendedColor = inputColor;
} else amendedColor = randomHexNumber;

if (notARandomColor) {
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
  console.log(
    chalk.hex(amendedColor)(
      backgroundHashtags2,
      backgroundEmpty,
      backgroundHashtags3,
    ),
  );
  console.log(
    chalk.hex(amendedColor)(
      backgroundHashtags2,
      amendedColor,
      backgroundHashtags3,
    ),
  );
  console.log(
    chalk.hex(amendedColor)(
      backgroundHashtags2,
      backgroundEmpty,
      backgroundHashtags3,
    ),
  );
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
  console.log(chalk.hex(amendedColor)(backgroundHashtags));
} else {
  console.log(chalk.hex(outputColor)(backgroundHashtags));
  console.log(chalk.hex(outputColor)(backgroundHashtags));
  console.log(chalk.hex(outputColor)(backgroundHashtags));
  console.log(
    chalk.hex(outputColor)(
      backgroundHashtags2,
      backgroundEmpty,
      backgroundHashtags3,
    ),
  );
  console.log(
    chalk.hex(outputColor)(
      backgroundHashtags2,
      outputColor,
      backgroundHashtags3,
    ),
  );
  console.log(
    chalk.hex(outputColor)(
      backgroundHashtags2,
      backgroundEmpty,
      backgroundHashtags3,
    ),
  );
  console.log(chalk.hex(outputColor)(backgroundHashtags));
  console.log(chalk.hex(outputColor)(backgroundHashtags));
  console.log(chalk.hex(outputColor)(backgroundHashtags));
}

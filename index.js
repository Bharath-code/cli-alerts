import chalk from "chalk";
import logSymbols from "log-symbols";
const green = chalk.green;
const greenInv = chalk.green.inverse;
const red = chalk.red;
const redInv = chalk.red.inverse;
const warning = chalk.hex(`#6a01ff`);
const warningInv = chalk.hex(`#6a01ff`).inverse;
const info = chalk.blue;
const infoInv = chalk.blue.inverse;

const testFunc = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define all options`,
    name: ``
  };
  const opts = { ...defaultOptions, ...options };
  const { type, msg, name } = opts;
  const printName = name ? name : type.toUpperCase();

  if (type === `success`) {
    console.log(`\n${logSymbols.success}  ${greenInv(` ${printName} `)}  ${green(msg)}\n`)
  }


  if (type === `error`) {
    console.log(`\n${logSymbols.error}  ${redInv(` ${printName} `)}  ${red(msg)}\n`)
  }

  if (type === `warning`) {
    console.log(`\n${logSymbols.warning}  ${warningInv(` ${printName} `)}  ${warning(msg)}\n`)
  }

  if (type === `info`) {
    console.log(`\n${logSymbols.info}  ${infoInv(` ${printName} `)}  ${info(msg)}\n`)
  }

}

export default testFunc;

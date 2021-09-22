#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');

clear();

const data = {
  name: chalk.bold.yellow('                    Daniela Arnedo Galarza'),
  handle: chalk.white('@darnedog12'),
  work: `${chalk.white('Engineering Leader at')} ${chalk
    .bold.gray('Condor Labs')}`,
  github: chalk.gray('https://github.com/') + chalk.green('darnedog12'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('danielaarnedog'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('daniela-arnedo'),
  npx: chalk.red('npx') + ' ' + chalk.white('darnedog12'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'blue',
  }
);

console.log(me);

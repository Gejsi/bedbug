#!/usr/bin/env node

import { program } from 'commander'
import generate from './generate.js'
import list from './list.js'

program.version('1.0.0')

program
  .command('generate')
  .description('Generate some throwaway data.')
  .alias('g')
  .action(generate)

program
  .command('list <email>')
  .description('Get a list of all messages sent to your temporary email.')
  .option('-i, --id <id>', 'view a specific email chosen by id')
  .option('-r, --recent', 'view the most recent email')
  .alias('l')
  .action(list)

program.parse()

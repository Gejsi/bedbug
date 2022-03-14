#!/usr/bin/env node

import { program } from 'commander'
import generate from './generate.mjs'
import list from './list.mjs'

program.version('1.0.2')

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

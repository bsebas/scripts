import { program } from 'commander'

/* program.option('-a, --artist', 'Orden for artist')
program.option('-b, --album', 'Orden for album')
program.option('-single', 'Orden for single')
program.option('-playlist',) */

program.command('orden').alias('o').option('-a <char>, --artist <char>')
program.command('new').alias('n').option('-p <char>, --playlist <char>')
program.command('add').alias('a').option('-p, --playlist')
program.command('config').alias('c').option('-p <char>, --path <char>')

program.parse()

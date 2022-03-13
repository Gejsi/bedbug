import chalk from 'chalk'
import html from 'html'
import fetch from 'node-fetch'
import { baseUrl } from './email.js'

const list = async (email, options) => {
  const [name, domain] = email.split('@')
  const { id, recent } = options
  let url

  if (id === undefined)
    url = `${baseUrl}getMessages&login=${name}&domain=${domain}`
  else url = `${baseUrl}readMessage&login=${name}&domain=${domain}&id=${id}`

  try {
    const response = await fetch(url)
    const emails = await response.json()

    if (id === undefined && recent !== true) console.log(emails)
    else if (recent === true)
      list(email, { id: emails[0].id, recent: undefined })
    else console.log(html.prettyPrint(emails.htmlBody, { indent_size: 2 }))
  } catch (error) {
    console.log(chalk.red(error.stack || error))
  }
}

export default list

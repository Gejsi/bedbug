import chalk from 'chalk'

export const baseUrl = 'https://www.1secmail.com/api/v1/?action='

export const getEmail = (firstName) => {
  const extArr = ['com', 'net', 'org']

  return (
    firstName.toLowerCase() +
    '@1secmail.' +
    extArr[Math.floor(Math.random() * extArr.length)]
  )
}

export const printEmails = (emails) => {
  if (emails.length === 0) console.log(chalk.yellow('Inbox is empty...'))
  else {
    emails.map((email) => {
      const { id, from, date, subject } = email
      console.log(
        chalk.green.bold(id),
        chalk.underline.yellow(from),
        chalk.grey(date),
        `"${subject}"`
      )
    })
  }
}

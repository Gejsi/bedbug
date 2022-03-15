import c from 'ansi-colors'

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
  if (emails.length === 0) console.log(c.yellow('Inbox is empty...'))
  else {
    emails.map(({ id, from, date, subject }) => {
      console.log(
        c.green.bold(id),
        c.underline.yellow(from),
        c.grey(date),
        `"${subject}"`
      )
    })
  }
}

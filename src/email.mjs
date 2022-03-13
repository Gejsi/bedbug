export const baseUrl = 'https://www.1secmail.com/api/v1/?action='

export const getEmail = (firstName) => {
  const extArr = ['com', 'net', 'org']

  return (
    firstName.toLowerCase() +
    '@1secmail.' +
    extArr[Math.floor(Math.random() * extArr.length)]
  )
}

import { faker } from '@faker-js/faker'
import chalk from 'chalk'
import { getEmail } from './email.mjs'

const heading = (text) =>
  console.log(chalk.magenta.italic.bold(`--------${text}--------`))

const item = (title, text, isShort) =>
  console.log(chalk.bold(`${title}:\t${isShort ? '\t' : ''}`), text)

const generate = () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const email = getEmail(firstName)
  const password = faker.internet.password(10)
  const phone = faker.phone.phoneNumber()
  const country = faker.address.country()
  const city = faker.address.city()
  const street = faker.address.streetAddress()
  const zipCode = faker.address.zipCode()
  const cardNumber = faker.finance.creditCardNumber()
  const cardDate = faker.date.soon()
  const cardCvv = faker.finance.creditCardCVV()

  heading('General information')
  item('First name', firstName)
  item('Last name', lastName)
  item('Email', email, true)
  item('Password', password)
  item('Phone number', phone)
  heading('Address')
  item('Country', country)
  item('City', city, true)
  item('Street', street, true)
  item('Zip code', zipCode)
  heading('Credit/Debit card')
  item('Card number', cardNumber)
  item('End date', cardDate.toLocaleDateString())
  item('CVV', cardCvv, true)
}

export default generate

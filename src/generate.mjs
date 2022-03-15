import {
  randAddress,
  randCreditCard,
  randPassword,
  randUser,
} from '@ngneat/falso'
import c from 'ansi-colors'
import { getRandCard } from './card.mjs'
import { getEmail } from './email.mjs'

const heading = (text) =>
  console.log(c.magenta.italic.bold(`--------${text}--------`))

const item = (title, text, isShort) =>
  console.log(c.bold(`${title}:\t${isShort ? '\t' : ''}`), text)

const generate = () => {
  const { firstName, lastName, phone } = randUser()
  const email = getEmail(firstName)
  const password = randPassword({ size: 10 })
  const { country, city, street, zipCode } = randAddress({
    includeCounty: false,
  })

  const [cardNumber, cardType] = getRandCard()

  const { untilEnd: cardDate, ccv: cardCvv } = randCreditCard()

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
  item('End date', cardDate)
  item('CVV', cardCvv, true)
  item('Card type', cardType)
}

export default generate

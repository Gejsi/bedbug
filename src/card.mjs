import cardGenerator from 'creditcard-generator'

export const getRandCard = () => {
  const cardTypes = [
    'VISA',
    'MasterCard',
    'Amex',
    'Diners',
    'Discover',
    'EnRoute',
    'JCB',
    'Voyager',
  ]

  const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)]

  return [cardGenerator.GenCC(cardType)[0], cardType]
}

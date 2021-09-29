const dotenv = require('dotenv')
dotenv.config()

const { getRandomNumber } = require('./funcs/getRandomNumber')
const { checkForKeyPhrase } = require('./funcs/checkForKeyPhrase')
const { getRandomTenorGifs } = require('./funcs/getRandomTenorGifs')

let randomCongratsGifs

// TODO - clean this up into its own func and import/call it
const getRandomCongratsGifs = async () => {
  try {
    randomCongratsGifs = await getRandomTenorGifs('congratulations', process.env.TENOR_KEY)
    return randomCongratsGifs
  } catch (error) {
    console.error('Error grabbing GIFS', error)
  }
}
getRandomCongratsGifs()

const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(process.env.TOKEN)

client.on('message', async (message) => {
  // v TODO - clean this up into its own testable module
  const messageContainsCongrats = checkForKeyPhrase(message.content)

  const congratsGifsAvailable = !!randomCongratsGifs

  if (messageContainsCongrats && congratsGifsAvailable) {
    const randomNumber = getRandomNumber(randomCongratsGifs)
    const randomGif = randomCongratsGifs[randomNumber].url
    // ^ TODO - clean this up into its own testable module

    message.channel.send(randomGif)
  }
})

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error)
})

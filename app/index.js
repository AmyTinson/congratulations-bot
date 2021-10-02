const dotenv = require('dotenv')
dotenv.config()

const { checkForKeyPhrase } = require('./funcs/checkForKeyPhrase')
const { getRandomTenorGifs } = require('./funcs/getRandomTenorGifs')
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

let randomCongratsGifs

const getRandomCongratsGifs = async () => {
  try {
    randomCongratsGifs = await getRandomTenorGifs('congratulations', process.env.TENOR_KEY)
    return randomCongratsGifs
  } catch (error) {
    console.error('Error grabbing GIFS', error)
  }
}
getRandomCongratsGifs()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(process.env.TOKEN)

let randomizeCount = 0

client.on('messageCreate', async (message) => {
  const messageContainsCongrats = checkForKeyPhrase(message.content)

  const congratsGifsAvailable = !!randomCongratsGifs

  if (randomizeCount >= 49) {
    getRandomCongratsGifs()
    randomizeCount = 0
  }

  if (messageContainsCongrats && congratsGifsAvailable) {
    const randomGif = randomCongratsGifs[randomizeCount].url
    randomizeCount++
    message.channel.send(randomGif)
  }
})

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error)
})

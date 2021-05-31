// SET UP ******************************
// Pull in env variables
const dotenv = require('dotenv')
dotenv.config()

// Bot set-up
const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(process.env.TOKEN)

// Get YouTube videos to send (array of strings)
const youtubeVids = require('./youtube-vids')

// HELPER FUNCS ******************************
function getRandomNumber () {
  return Math.floor(Math.random() * (youtubeVids.array.length - 0 + 1) + 0)
}

// The actual fun BOT stuffs
client.on('message', (message) => {
  const botStuffs = async () => {
    const randomNumber = await getRandomNumber()
    const caseInsensitiveMessage = await message.content.toLowerCase()
    if (
      caseInsensitiveMessage.includes('congrats') ||
      caseInsensitiveMessage.includes('congratulations') ||
      caseInsensitiveMessage.includes('has reached level')
    ) {
      message.channel.send(youtubeVids.array[randomNumber])
    }
  }
  botStuffs()
})

// SET UP ******************************
// Pull in env variables
const dotenv = require('dotenv')
dotenv.config()

// Get the stuff to do moar stuff
const youtubeVids = require('./data/youtube-vids')
const { getRandomNumber } = require('./funcs/getRandomNumber')
const { inputCheck } = require('./funcs/inputCheck')

// Discord Bot Setup
const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(process.env.TOKEN)

// The actual fun BOT stuffs
client.on('message', async (message) => {
  if (inputCheck(message.content) && !message.author.bot) {
    const randomNumber = await getRandomNumber(youtubeVids.array)
    const randomVideo = await youtubeVids.array[randomNumber]
    message.channel.send(randomVideo)
  }
})

// Error Information
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error)
})

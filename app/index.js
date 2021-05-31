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
const youtubeVidsArray = youtubeVids.array

// HELPER FUNCS ******************************
function getRandomNumber () {
  return Math.floor(Math.random() * (youtubeVidsArray.length - 0 + 1) + 0)
}

// The actual fun BOT stuffs
client.on('message', message => {
  if (message.content === '!congrats') {
    message.channel.send(youtubeVids[getRandomNumber()])
  }
})

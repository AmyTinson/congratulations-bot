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

// The actual fun BOT stuffs
client.on('message', message => {
  if (message.content === '!congrats') {
    message.channel.send('https://youtu.be/1Bix44C1EzY')
  }
})

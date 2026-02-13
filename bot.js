const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'IL_GALLO1-cxTY',
    port: 25565,
    username: 'AFK_Bot'
  })

  bot.on('spawn', () => {
    console.log('Bot connesso. Server salvo.')
  })

  bot.on('end', () => {
    setTimeout(createBot, 10000)
  })
}

createBot()
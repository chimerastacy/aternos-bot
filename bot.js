const mineflayer = require('mineflayer')

// Funzione che crea il bot e lo mantiene attivo
function createBot() {
  const bot = mineflayer.createBot({
    host: 'ILTUOIP.aternos.me',  // <-- sostituisci con l'IP del tuo server
    port: 25565,                 // porta standard Minecraft
    username: 'AFK_Bot'          // nome del bot
  })

  // Quando il bot entra nel server
  bot.on('spawn', () => {
    console.log('Bot connesso. Server salvo.')

    // Keep-alive: muove leggermente la testa ogni 5 minuti
    setInterval(() => {
      const yaw = Math.random() * 2 * Math.PI  // rotazione casuale orizzontale
      const pitch = 0                           // guarda dritto
      bot.look(yaw, pitch, true)
    }, 300000) // 300000ms = 5 minuti
  })

  // Se il bot viene disconnesso, tenta di rientrare dopo 10 secondi
  bot.on('end', () => {
    console.log('Bot disconnesso. Riprovo tra 10 secondi...')
    setTimeout(createBot, 10000)
  })

  // Se c'è un errore di connessione, tenta di rientrare
  bot.on('error', (err) => {
    console.log('Errore:', err.message)
    setTimeout(createBot, 10000)
  })
}

// Avvia il bot
createBot()

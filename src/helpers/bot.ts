import { ContextMessageUpdate, Telegraf } from 'telegraf'

//socks5
const SocksAgent = require('socks5-https-client/lib/Agent');
const socksAgent = new SocksAgent({
  socksHost: process.env.host,
  socksPort: process.env.port,
  socksUsername: process.env.login,
  socksPassword: process.env.pass,
});


// Dependencies
const TelegrafBot = require('telegraf')

export const bot = new TelegrafBot(process.env.TOKEN, {telegram: { agent: socksAgent }}) as Telegraf<
  ContextMessageUpdate
>

bot.telegram.getMe().then(botInfo => {
  const anybot = bot as any
  anybot.options.username = botInfo.username
})

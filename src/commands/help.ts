// Dependencies
import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { strings } from '../helpers/strings'
import { checkLock } from '../middlewares/checkLock'

export function setupHelp(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(['help', 'start'], checkLock, ctx => {
    ctx.replyWithMarkdown(strings(ctx.dbchat, 'help'), {
      disable_web_page_preview: true,
    })
  })
}

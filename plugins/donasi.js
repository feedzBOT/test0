let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Three:* [089626029135]
┣➥ *Dana:* [089626029135]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289626029135*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

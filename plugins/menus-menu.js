import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/mmhuevo.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `😾 𝗔𝗡𝗗𝗥𝗘𝗜𝗧𝗔 𝗕𝗢𝗧 😾

  *Ey , Hola AndreLovers ${taguser} Te Presento Este Bot 😾*

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 Creador : Andreita
 ►😾 Numero ; +51 970 337 668
 ►😾 Adquirir : +51 937 305 486
 ►😾 Ig : https://www.instagram.com/fantasmin.ventas.bot/
 ►😾 AndreCoins ${money}
 ${readMore}
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

*« COMPRAR BOT Y VENTA »*

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}Yape *< Comprar Bot >*_
 ►😾 _${usedPrefix}Vendedores *< Comprar Bot >*_
 ►😾 _${usedPrefix}PrecioFull *< Comprar Bot Full >*_
 ►😾 _${usedPrefix}Pago2 *< Comprar Con Diamantes >*_
 ►😾 _${usedPrefix}Pago3 *< Venta De Diamantes >*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« MENUS ADICIONALES »*
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}labiblia_
 ►😾 _${usedPrefix}ListaVs_
 ►😾 _${usedPrefix}Juegos_
 ►😾 _${usedPrefix}Descargas_
 ►😾 _${usedPrefix}Stickers_
 ►😾 _${usedPrefix}Grupos1_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« COMANDOS BOT »*

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}grupos_
 ►😾 _${usedPrefix}estado_
 ►😾 _${usedPrefix}infobot_
 ►😾 _${usedPrefix}AlacranSpeed_
 ►😾 _${usedPrefix}donar_
 ►😾 _${usedPrefix}owner_
 ►😾 _${usedPrefix}reporte *<txt>*_
 ►😾 _${usedPrefix}join *<wagp_url>*_
 ►😾 _${usedPrefix}fixmsgespera_
 ►😾 _${usedPrefix}new_
 ►😾 _${usedPrefix}enable restrict_
 ►😾 _${usedPrefix}disable restrict_
 ►😾 _${usedPrefix}enable autoread_
 ►😾 _${usedPrefix}disable autoread_
 ►😾 _${usedPrefix}enable antispam_
 ►😾 _${usedPrefix}disable antispam_
 ►😾 _${usedPrefix}enable anticall_
 ►😾 _${usedPrefix}disable anticall_
 ►😾 _${usedPrefix}enable modoia_
 ►😾 _${usedPrefix}disable modoia_
 ►😾 _${usedPrefix}enable audios_bot_
 ►😾 _${usedPrefix}disable audios_bot_
 ►😾 _${usedPrefix}enable antiprivado_
 ►😾 _${usedPrefix}disable antiprivado_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛


 *« Enable / Disable »*

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}enable *welcome*_
 ►😾 _${usedPrefix}disable *welcome*_
 ►😾 _${usedPrefix}enable *modohorny*_
 ►😾 _${usedPrefix}disable *modohorny*_
 ►😾 _${usedPrefix}enable *antilink*_
 ►😾 _${usedPrefix}disable *antilink*_
 ►😾 _${usedPrefix}enable *antilink2*_
 ►😾 _${usedPrefix}disable *antilink2*_
 ►😾 _${usedPrefix}enable *detect*_
 ►😾 _${usedPrefix}disable *detect*_
 ►😾 _${usedPrefix}enable *audios*_
 ►😾 _${usedPrefix}disable *audios*_
 ►😾 _${usedPrefix}enable *autosticker*_
 ►😾 _${usedPrefix}disable *autosticker*_
 ►😾 _${usedPrefix}enable *antiviewonce*_
 ►😾 _${usedPrefix}disable *antiviewonce*_
 ►😾 _${usedPrefix}enable *antitoxic*_
 ►😾 _${usedPrefix}disable *antitoxic*_
 ►😾 _${usedPrefix}enable *antitraba*_
 ►😾 _${usedPrefix}disable *antitraba*_
 ►😾 _${usedPrefix}enable *antiarabes*_
 ►😾 _${usedPrefix}disable *antiarabes*_
 ►😾 _${usedPrefix}enable *modoadmin*_
 ►😾 _${usedPrefix}disable *modoadmin*_
 ►😾 _${usedPrefix}enable *antidelete*_
 ►😾 _${usedPrefix}disable *antidelete*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛


 *« BUSCADORES »*

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}githubsearch *<txt>*_
 ►😾 _${usedPrefix}pelisplus *<txt>*_
 ►😾 _${usedPrefix}modapk *<txt>*_
 ►😾 _${usedPrefix}stickersearch *<txt>*_
 ►😾 _${usedPrefix}stickersearch2 *<txt>*_
 ►😾 _${usedPrefix}xnxxsearch *<txt>*_
 ►😾 _${usedPrefix}animeinfo *<txt>*_
 ►😾 _${usedPrefix}google *<txt>*_
 ►😾 _${usedPrefix}letra *<txt>*_
 ►😾 _${usedPrefix}wikipedia *<txt>*_
 ►😾 _${usedPrefix}ytsearch *<txt>*_
 ►😾 _${usedPrefix}playstore *<txt>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛


 *« CONVERTIDORES »* 

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}toanime *<img>*_
 ►😾 _${usedPrefix}togifaud *<video>*_
 ►😾 _${usedPrefix}toimg *<sticker>*_
 ►😾 _${usedPrefix}tomp3 *<video>*_
 ►😾 _${usedPrefix}tomp3 *<nota de voz>*_
 ►😾 _${usedPrefix}toptt *<video / audio>*_
 ►😾 _${usedPrefix}tovideo *<sticker>*_
 ►😾 _${usedPrefix}tourl *<video / img / audio>*_
 ►😾 _${usedPrefix}tts *<idioma> <txt>*_
 ►😾 _${usedPrefix}tts *<efecto> <txt>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« EFECTOS & LOGOS »* 

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}logos *<efecto> <txt>*_
 ►😾 _${usedPrefix}logochristmas *<txt>*_
 ►😾 _${usedPrefix}logocorazon *<txt>*_
 ►😾 _${usedPrefix}ytcomment *<txt>*_
 ►😾 _${usedPrefix}hornycard *<@tag>*_
 ►😾 _${usedPrefix}simpcard *<@tag>*_
 ►😾 _${usedPrefix}lolice *<@tag>*_
 ►😾 _${usedPrefix}itssostupid_
 ►😾 _${usedPrefix}pixelar_
 ►😾 _${usedPrefix}blur_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« FRASES & TEXTOS »* 

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}piropo_
 ►😾 _${usedPrefix}consejo_
 ►😾 _${usedPrefix}fraseromantica_
 ►😾 _${usedPrefix}historiaromantica_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« RANDOM »* 
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}kpop *<blackpink/exo/bts>*_
 ►😾 _${usedPrefix}cristianoronaldo_
 ►😾 _${usedPrefix}messi_
 ►😾 _${usedPrefix}cat_
 ►😾 _${usedPrefix}dog_
 ►😾 _${usedPrefix}meme_
 ►😾 _${usedPrefix}itzy_
 ►😾 _${usedPrefix}blackpink_
 ►😾 _${usedPrefix}navidad_
 ►😾 _${usedPrefix}wpmontaña_
 ►😾 _${usedPrefix}pubg_
 ►😾 _${usedPrefix}wpgaming_
 ►😾 _${usedPrefix}wpaesthetic_
 ►😾 _${usedPrefix}wpaesthetic2_
 ►😾 _${usedPrefix}wprandom_
 ►😾 _${usedPrefix}wallhp_
 ►😾 _${usedPrefix}wpvehiculo_
 ►😾 _${usedPrefix}wpmoto_
 ►😾 _${usedPrefix}coffee_
 ►😾 _${usedPrefix}pentol_
 ►😾 _${usedPrefix}caricatura_
 ►😾 _${usedPrefix}ciberespacio_
 ►😾 _${usedPrefix}technology_
 ►😾 _${usedPrefix}doraemon_
 ►😾 _${usedPrefix}hacker_
 ►😾 _${usedPrefix}planeta_
 ►😾 _${usedPrefix}randomprofile_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« EFECTOS AUDITIVOS »* 

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}bass_
 ►😾 _${usedPrefix}blown_
 ►😾 _${usedPrefix}deep_
 ►😾 _${usedPrefix}earrape_
 ►😾 _${usedPrefix}fast_
 ►😾 _${usedPrefix}fat_
 ►😾 _${usedPrefix}nightcore_
 ►😾 _${usedPrefix}reverse_
 ►😾 _${usedPrefix}robot_
 ►😾 _${usedPrefix}slow_
 ►😾 _${usedPrefix}smooth_
 ►😾 _${usedPrefix}tupai_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« CHAT ANÓNIMO »*
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}start_
 ►😾 _${usedPrefix}next_
 ►😾 _${usedPrefix}leave_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« HERRAMIENTAS »*
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}inspect *<wagc_url>*_
 ►😾 _${usedPrefix}chatgpt *<txt>*_
 ►😾 _${usedPrefix}delchatgpt
 ►😾 _${usedPrefix}gptvoz *<txt>*_
 ►😾 _${usedPrefix}dall-e *<txt>*_
 ►😾 _${usedPrefix}spamwa *num|txt|cant>*_
 ►😾 _${usedPrefix}tamaño *<cant> <img / video>*_
 ►😾 _${usedPrefix}readviewonce *<img / video>*_
 ►😾 _${usedPrefix}clima *<país> <ciudad>*_
 ►😾 _${usedPrefix}encuesta *<txt1|txt2>*_
 ►😾 _${usedPrefix}afk *<motivo>*_
 ►😾 _${usedPrefix}ocr *<responde a img>*_
 ►😾 _${usedPrefix}hd *<responde a img>*_
 ►😾 _${usedPrefix}acortar *<url>*_
 ►😾 _${usedPrefix}calc *<operacion>*_
 ►😾 _${usedPrefix}del *<msj>*_
 ►😾 _${usedPrefix}whatmusic *<audio>*_
 ►😾 _${usedPrefix}readqr *<img>*_
 ►😾 _${usedPrefix}qrcode *<txt>*_
 ►😾 _${usedPrefix}readmore *<txt1|txt2>*_
 ►😾 _${usedPrefix}styletext *<txt>*_
 ►😾 _${usedPrefix}traducir *<txt>*_
 ►😾 _${usedPrefix}nowa *num>*_
 ►😾 _${usedPrefix}covid *<pais>*_
 ►😾 _${usedPrefix}horario_
 ►😾 _${usedPrefix}dropmail_
${readMore}
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛
 
 *« ECONOMÍA »* 
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}adventure_
 ►😾 _${usedPrefix}cazar_
 ►😾 _${usedPrefix}cofre_
 ►😾 _${usedPrefix}balance_
 ►😾 _${usedPrefix}claim_
 ►😾 _${usedPrefix}heal_
 ►😾 _${usedPrefix}lb_
 ►😾 _${usedPrefix}levelup_
 ►😾 _${usedPrefix}myns_
 ►😾 _${usedPrefix}perfil_
 ►😾 _${usedPrefix}work_
 ►😾 _${usedPrefix}minar_
 ►😾 _${usedPrefix}minar2_
 ►😾 _${usedPrefix}buy_
 ►😾 _${usedPrefix}buyall_
 ►😾 _${usedPrefix}verificar_
 ►😾 _${usedPrefix}robar *<cant> <@tag>*_
 ►😾 _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
 ►😾 _${usedPrefix}unreg *<sn>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

 *« PROPIETARIO »* 

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
 ►😾 _${usedPrefix}dsowner_
 ►😾 _${usedPrefix}setprefix *<prefijo>*_
 ►😾 _${usedPrefix}resetprefix_
 ►😾 _${usedPrefix}autoadmin_
 ►😾 _${usedPrefix}grouplist_
 ►😾 _${usedPrefix}chetar_
 ►😾 _${usedPrefix}leavegc_
 ►😾 _${usedPrefix}cajafuerte_
 ►😾 _${usedPrefix}blocklist_
 ►😾 _${usedPrefix}addowner *<@tag / num>*_
 ►😾 _${usedPrefix}delowner *<@tag / num>*_
 ►😾 _${usedPrefix}block *<@tag / num>*_
 ►😾 _${usedPrefix}unblock *<@tag / num>*_
 ►😾 _${usedPrefix}enable *restrict*_
 ►😾 _${usedPrefix}disable *restrict*_
 ►😾 _${usedPrefix}enable *autoread*_
 ►😾 _${usedPrefix}disable *autoread*_
 ►😾 _${usedPrefix}enable *public*_
 ►😾 _${usedPrefix}disable *public*_
 ►😾 _${usedPrefix}enable *pconly*_
 ►😾 _${usedPrefix}disable *pconly*_
 ►😾 _${usedPrefix}enable *gconly*_
 ►😾 _${usedPrefix}disable *gconly*_
 ►😾 _${usedPrefix}enable *anticall*_
 ►😾 _${usedPrefix}disable *anticall*_
 ►😾 _${usedPrefix}enable *antiprivado*_
 ►😾 _${usedPrefix}disable *antiprivado*_
 ►😾 _${usedPrefix}enable *modejadibot*_
 ►😾 _${usedPrefix}disable *modejadibot*_
 ►😾 _${usedPrefix}enable *audios_bot*_
 ►😾 _${usedPrefix}disable *audios_bot*_
 ►😾 _${usedPrefix}enable *antispam*_
 ►😾 _${usedPrefix}disable *antispam*_
 ►😾 _${usedPrefix}msg *<txt>*_
 ►😾 _${usedPrefix}banchat_
 ►😾 _${usedPrefix}unbanchat_
 ►😾 _${usedPrefix}resetuser *<@tag>*_
 ►😾 _${usedPrefix}banuser *<@tag>*_
 ►😾 _${usedPrefix}unbanuser *<@tag>*_
 ►😾 _${usedPrefix}dardiamantes *<@tag> <cant>*_
 ►😾 _${usedPrefix}añadirxp *<@tag> <cant>*_
 ►😾 _${usedPrefix}banuser *<@tag>*_
 ►😾 _${usedPrefix}bc *<txt>*_
 ►😾 _${usedPrefix}bcchats *<txt>*_
 ►😾 _${usedPrefix}bcgc *<txt>*_
 ►😾 _${usedPrefix}bcgc2 *<audio>*_
 ►😾 _${usedPrefix}bcgc2 *<video>*_
 ►😾 _${usedPrefix}bcgc2 *<img>*_
 ►😾 _${usedPrefix}bcbot *<txt>*_
 ►😾 _${usedPrefix}cleartpm_
 ►😾 _${usedPrefix}restart_
 ►😾 _${usedPrefix}AlacranUp_
 ►😾 _${usedPrefix}banlist_
 ►😾 _${usedPrefix}addprem *<@tag> <tiempo>*_
 ►😾 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
 ►😾 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
 ►😾 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
 ►😾 _${usedPrefix}delprem *<@tag>*_
 ►😾 _${usedPrefix}listcmd_
 ►😾 _${usedPrefix}setppbot *<responder a img>*_
 ►😾 _${usedPrefix}addcmd *<txt> <responder a sticker/img>*_
 ►😾 _${usedPrefix}delcmd *<responder a sticker/img con comando o txt asignado>*_
 ►😾 _${usedPrefix}saveimage
 ►😾 _${usedPrefix}viewimage
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛`.trim();
  if (m.isGroup) {
   // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
   conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } else {
   // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
   conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
  }
 } catch {
  conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
 }
};
handler.command = /^(menu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
 const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
 const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
 const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
 return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

//importamos las variables de entorno
require('dotenv').config();
//Importamos como Clase el modulo de Telegraf
const Telegraf = require('telegraf')

//Instanciamos el Bot con el Token que nos brindo BotFather
const bot = new Telegraf(process.env.TOKEN)
console.log('>>>Bot is connected and ready to listen')

//creamos la funcion start tomando el contex ctx
bot.start((ctx) => {
    //usaremos funciones del context
    //console.log(ctx)
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    //usamos las funciones o metodos del Chat
    //ctx.reply('Welcome');
    //estos datos se pueden guardar en una BBDD
    //ctx.reply('Welcome ' + ctx.from.first_name)
    //ctx.reply(`Bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes[0]}`)
   //ejemplo usando el API de Telegram
    bot.telegram.sendMessage(ctx.chat.id, `Bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes[0]}`)

})
//creamos la funcion help tomando el contex ctx
bot.help((ctx) => {
    
    //usamos las funciones o metodos del Chat
    ctx.reply('Help!!');
})
//creamos la funcion start tomando el contex ctx
bot.settings((ctx) => {
    //usamos las funciones o metodos del Chat
    ctx.reply('Settings');
})
//Crearemos nuestro comando personalizado
bot.command(['myCommand', 'Mycommand', 'MYCOMMAND'], (ctx) =>{
    ctx.reply('my custom command');
})

//Cuando el usuario escribe algo enespecifico
bot.hears('need a computer', ctx => {
    ctx.reply('Hey!!! I am selling computer');
})
//cuando el usuario escriba texto(evento)
/*bot.on('text', ctx => {
    ctx.reply('You are Tiping something!!')
})*/
//cuando el usuario envia un sticker
bot.on('sticker', ctx => {
    ctx.reply('oh!! Do you like Stickers???')
})
//cuando se menciona a un usuario
bot.mention('BotFather', (ctx) => {
    ctx.reply('You mentioned someone')
})
//si alguien tipea un telefono
bot.phone('+5492804111111', ctx => {
    ctx.reply('this my phone number')
})
//si alguien tipea un hashtag estos son metodos 
//de webhookreply
bot.hashtag('programming', ctx => {
    ctx.reply('this is a hashtag!!!')
})

//para lanzar el bot y que se mantenga escuchando en consola
bot.launch()

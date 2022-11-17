const { Listener } = require('discord-akairo');
const { GuildMember } = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = class extends Listener {
    constructor() {
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        })
    }
    /**
     * @param { GuildMember } member
     */
    async exec(member) {
let loginChannel = db.fetch(`loginChannel_${member.guild.id}`) 
let unRegisteredRole = db.fetch(`unRegisteredRole_${member.guild.id}`)   
let staffRole = db.fetch(`staffRole_${member.guild.id}`)
let channel = loginChannel
var moment = require("moment")
require("moment-duration-format");
moment.locale("tr");
member.setNickname(`İsim | Yaş`) 
let unRegistered = unRegisteredRole
await member.roles.add(unRegistered);
let kullanıcı = this.client.users.cache.get(member.id);
const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
let staff = staffRole
const mapping = {
  " ": "   ",
   '0': '0️⃣',
    '1': '1️⃣',
              '2': '2️⃣',
              '3': '3️⃣',
              '4': '4️⃣',
              '5': '5️⃣',
              '6': '6️⃣',
              '7': '7️⃣',
              '8': '8️⃣',
              '9': '9️⃣'
}
  let üyesayısı =   `${member.guild.memberCount.toString()}`
     .split("")
     .map(c => mapping[c] || c)
     .join("")

var kontrol;
if (kurulus < 1296000000) {
member.roles.add('910268287496101890');
member.roles.remove(kayıtsız);
kontrol = `Hesap Durumu: **Güvenilir Değil** ❌`
}
if (kurulus > 1296000000) kontrol = `Hesap Durumu: **Güvenilir** ✅`

const kuruluss = new Date().getTime() - kullanıcı.createdAt.getTime();  
const gecen = moment.duration(kuruluss).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
const embed = new Discord.MessageEmbed()
.setTitle(`Sunucumuza Hoşgeldin ${member.user.username}`)
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setDescription(`<:ayicik:997507127084073021> • Sunucumuza Hoşgeldin ${kullanıcı} !

<:count:997507450360057946>  • Seninle Beraber Sunucumuzda `+ üyesayısı +` Değerli İnsan Oldu.

<:time:997506241079279657> • Hesabın \``+ gecen +`\` Önce Oluşturulmuş.

<:status:997507698302124143> • `+ kontrol +`

<:infinity:997507901562298368> • <@&${staff}> Rolündeki Yetkililer Seninle İlgilenicektir.

`)
.setColor("RANDOM")
this.client.channels.cache.get(channel).send({ content: `<@&${staff}>`, embeds: [embed]})

}


}
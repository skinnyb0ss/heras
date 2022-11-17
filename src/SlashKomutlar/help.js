const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageActionRow, MessageSelectMenu} = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = { data: new SlashCommandBuilder()
    .setName("help")//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
    .setDescription(`Yardım Komutudur.`),
	
    /**
     * @param { CommandInteraction } interaction 
     */
    async execute(interaction) {
 let embed = new Discord.MessageEmbed()
.setDescription(`Cafex Yazılım Kayıt Bot Yardım Menüsü`)
.addField(`/register`, `Kayıt Komutudur. Erkek Kız Seçim Menüsü Vardır.`, true)
.addField(`/config`, `Bayan Üye, Erkek Üyeye Verilecek Rol Burdan Ayarlanır. Ayrıca Komutu Kullanacak Rol De Buradan Ayarlanıyor.`, true)
.setColor(`RANDOM`)
.setFooter({ text: `Cafex Yazılım, En İyi Hizmet İçin Yanınızda!`, iconURL: "https://cdn.discordapp.com/icons/984570471515324588/e68e1ee640b6c36865eef45ceb9f949a.png"})
.setTimestamp()
interaction.reply({ embeds: [embed]})
//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
}
}
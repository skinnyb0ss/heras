const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageActionRow, MessageSelectMenu} = require('discord.js')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
const Discord = require('discord.js')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
const db = require('quick.db')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
module.exports = { data: new SlashCommandBuilder()
    .setName("config")//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
    .setDescription(`Register Config`)//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
    .addRoleOption(option => option.setName('unregistered').setDescription('Kayıtsız Rolü').setRequired(true))
	.addRoleOption(option => option.setName('manrole').setDescription('Erkek Kullanıcılara Verilecek Rolü Seç!').setRequired(true))
	.addRoleOption(option => option.setName('womanrole').setDescription('Bayanlara Verilecek Rolü Seç!').setRequired(true))
	.addRoleOption(option => option.setName('staffrole').setDescription('Komutu Kullanabilecek Yetkili!').setRequired(true))//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
	.addChannelOption(option => option.setName('channel').setDescription('Girişlerde Mesaj Atılacak Kanalı Seçin!').setRequired(true)),
    /**
     * @param { CommandInteraction } interaction 
     */
    async execute(interaction) {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({ content: "Yönetici (8) Perm Olanlar Bu Komutu Kullanabilir", ephemeral: true})  
        const manRole = interaction.options.getRole('manrole');
        const womanRole = interaction.options.getRole('womanrole');//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
        const staffRole = interaction.options.getRole('staffrole');
        const loginChannel = interaction.options.getChannel('channel')
        const unRegistered = interaction.options.getRole('unregistered');

        let bayilbeycikEmbed = new Discord.MessageEmbed()//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
        .setTitle(`Verilecek Roller Ayarlandı!`)//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
        .addField(`Sunucuya Yeni Girenlere Verilen Rol |`, `<@&${unRegistered.id}>`, true)
        .addField(`Erkeklere Verilecek Rol |`, `<@&${manRole.id}>`, true)
        .addField(`Bayanlara Verilecek Rol |`, `<@&${womanRole.id}>`, true)
        .addField(`Kayıt Edecek Yetkili Rolü |`, `<@&${staffRole.id}>`, true)
        .addField(`Kullanıcı Girişde Otomatik Mesaj Atılacak Kanal |`, `<#${loginChannel.id}>`, true)
        .addField(`Ayarlayan Yetkili |`, `<@!${interaction.user.id}>`, true)
        .setColor('RANDOM')
        .setFooter({ text: `Cafex Yazılım, En İyi Hizmet İçin Yanınızda!`, iconURL: "https://cdn.discordapp.com/icons/984570471515324588/e68e1ee640b6c36865eef45ceb9f949a.png"})
        .setTimestamp()
        interaction.reply({ embeds: [bayilbeycikEmbed]})
db.set(`manRole_${interaction.guild.id}`, manRole.id)
db.set(`womanRole_${interaction.guild.id}`, womanRole.id)
db.set(`staffRole_${interaction.guild.id}`, staffRole.id)
db.set(`loginChannel_${interaction.guild.id}`, loginChannel.id)
db.set(`unRegisteredRole_${interaction.guild.id}`, unRegistered.id)
}//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
}
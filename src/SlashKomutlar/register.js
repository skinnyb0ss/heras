const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
const {MessageActionRow, MessageSelectMenu} = require('discord.js')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
const Discord = require('discord.js')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
const db = require('quick.db')//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!

module.exports = { data: new SlashCommandBuilder()//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!
    .setName("register")
    .setDescription(`Register a Member`)
	.addUserOption(option => option.setName('üye').setDescription('Kayıt Edilecek Üyeyi Seç!').setRequired(true))
    .addStringOption(option => option.setName('isim').setDescription('Üyenin İsmini Gir!').setRequired(true))
    .addNumberOption(option => option.setName('yaş').setDescription('Üyenin Yaşını Gir!').setRequired(true)),
    /**
     * @param { CommandInteraction } interaction 
     */
    async execute(interaction) { 
        const age = interaction.options.getNumber('yaş'); 
        const name = interaction.options.getString('isim');
        let stafRole = db.fetch(`staffRole_${interaction.guild.id}`)  
        if(!interaction.member.roles.cache.some(role => (role.id === stafRole))) return interaction.channel.send({ content: "Sadece Yetkililer Kapatabilir.", ephemeral: true }) && interaction.reply({ content: `${interaction.member.username} Sadece Yetkililer Kullanabilir.`})

        const user = interaction.options.getMember('üye');
        const row = new MessageActionRow()
      .addComponents(
          new MessageSelectMenu()
              .setCustomId('select')
              .setPlaceholder('Erkek Veya Kız Olduğunu Seç!')
              .addOptions([
                  {
                      label: 'Erkek',
                      description: 'Erkek Kayıtları İçin Bunu Seçin.',
                      value: 'man',
                      emoji: "<:man:996479568326180875>"
                  },
                  {
                      label: 'Bayan',
                      description: 'Bayan Kayıtları İçin Bunu Seçin.',
                      value: 'woman',
                      emoji: "<:woman:996479570872111154>"
                  },
              
                  
              ]),
      );

await interaction.reply({
      embeds: [{
          title: 'Kayıt Menüsü',
          description: 'Kayıt Seçenekleri Aşşağıda, Kayıt Eden Yetkili Seçicektir.',
          color: "BLURPLE",
          footer: {text: 'Cafex Yazılım, En İyi Hizmet İçin Yanınızda! | Bay İlbeycik', iconURL: "https://cdn.discordapp.com/icons/984570471515324588/e68e1ee640b6c36865eef45ceb9f949a.png"}
      }],
      components: [row]
  })
  interaction.client.on("interactionCreate", async interaction => {
      if (!interaction.isSelectMenu()) return;
      if(interaction.customId === "select") {

          if(interaction.values[0] === "man") {
            if(!interaction.member.roles.cache.some(role => (role.id === stafRole))) return interaction.reply({ content: "Sadece Kayıt Yetkilileri Bu İşlemi Yapabilir.", ephemeral: true }) && interaction.channel.send({ content: `${interaction.user.username} Sadece Yetkililer Kullanabilir.`})
let manRole = db.fetch(`manRole_${interaction.guild.id}`)  
let unRegistered = db.fetch(`unRegisteredRole_${interaction.guild.id}`)
            user.roles.remove(unRegistered)
user.setNickname(`${name} | ${age}`)
             await interaction.guild.members.cache.get(user.id).roles.add(manRole).then((message)=>{
                  const manMessage = new Discord.MessageEmbed()
                  .setTitle('Rol Verildi')
                  .setDescription(`${user} Kullanıcısına Rol Verildi | Kayıt Menüsü Silindi`)
                  .addField(`Rolü Veren Yetkili |`, `<@!${interaction.user.id}>`, true)
                  .addField(`Kayıt Edilen İsim |`, `${name}`, true)
                  .addField(`Kayıt Edilen Yaş |`, `${age}`, true)
                  .setFooter({ text: `Cafex Yazılım, En İyi Hizmet İçin Yanınızda!`, iconURL: "https://cdn.discordapp.com/icons/984570471515324588/e68e1ee640b6c36865eef45ceb9f949a.png"})
        .setTimestamp()
                  .setColor('AQUA')
                  interaction.channel.send({embeds: [manMessage]})
              interaction.reply({ content: "Başarıyla \`Erkek\` Olarak Kaydettin.", ephemeral: true})
              interaction.message.delete()

              })
             
          }}
          if(interaction.values[0] === "woman") {
            if(!interaction.member.roles.cache.some(role => (role.id === stafRole))) return interaction.reply({ content: "Sadece Kayıt Yetkilileri Bu İşlemi Yapabilir.", ephemeral: true }) && interaction.channel.send({ content: `${interaction.user.username} Sadece Yetkililer Kullanabilir.`})
            let womanRole = db.fetch(`womanRole_${interaction.guild.id}`) 
            let unRegistered = db.fetch(`unRegisteredRole_${interaction.guild.id}`)
            user.roles.remove(unRegistered)
            user.setNickname(`${name} | ${age}`)
 
                       await interaction.guild.members.cache.get(user.id).roles.add(womanRole).then((message)=>{
                const womanMessage = new Discord.MessageEmbed()
                .setTitle('Rol Verildi')
                .setDescription(`${user} Kullanıcısına Rol Verildi | Kayıt Menüsü Silindi`)
                .addField(`Rolü Veren Yetkili |`, `<@!${interaction.user.id}>`, true)
                .addField(`Kayıt Edilen İsim |`, `${name}`, true)
                .addField(`Kayıt Edilen Yaş |`, `${age}`, true)
                .setFooter({ text: `Cafex Yazılım, En İyi Hizmet İçin Yanınızda!`, iconURL: "https://cdn.discordapp.com/icons/984570471515324588/e68e1ee640b6c36865eef45ceb9f949a.png"})
                .setTimestamp()  
                              .setColor('AQUA')
                interaction.channel.send({embeds: [womanMessage]})
            interaction.reply({ content: "Başarıyla \`Bayan\` Olarak Kaydettin.", ephemeral: true})
         interaction.message.delete()
    })
          }
  })
//Altyapı Cafex Yazılım Tarafından Lrows'a Özel Yapılmıştır Paylaşılması Yasaktır!


    
}
}
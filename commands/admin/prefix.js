const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db")
var request = require('request');
var cheerio = require('cheerio');
module.exports = {
    name: "prefix",
    aliases: ["setprefix", "prefix"],
  category: "moderation",
    description: "Nastaví prefix serveru",
    usage: "",
    run: (client, message, args) => { 
    
	//if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ You do not have permissions to manage guild. Please contact a staff member");
 if(!args[0]) return message.channel.send(`❌ Prosím použij .refix <nový>`);    

	var lyrics = args[0];
      
       if (lyrics.length > "2") {
         message.channel.send(":x: Prosím použij jen 2 znaky")
         return;
       }   
/*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });*/
      
   if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ Nemáš práva");             
/*db.set(`prefix_${message.guild.id}`, args.join("")).then(i => {
	message.channel.send(`Success set prefix to **${i}**`)   
})*/
      
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":rosette: PREFIX CHANGED :rosette:")
    .setDescription("Starý Prefi: `"+ args.join(" ") +"`\nNový  prefix `" + db.set(`prefix_${message.guild.id}`, args.join("")) + "`")
	.setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();

	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("🏵️");
	})

    }}
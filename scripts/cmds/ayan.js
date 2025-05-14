module.exports = {
config: {
name: "aYan",
version: "1.0",
author: "aYan",
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "no prefix",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "hussain") {
return message.reply({
body: " ──────────◊\n‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  \n\n‣ 𝐍𝐚𝐦𝐞: 𝗛𝗨𝗦𝗦𝗔𝗜𝗡                            ‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:🦋𝗜𝗧𝗔𝗖𝗛𝗜 ✞︎ 𝗨𝗖𝗛𝗜𝗛𝗔  」",
attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LbneO8C.mp4")
});
}
}
}

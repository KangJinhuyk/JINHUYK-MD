//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/50943469824 , https://wa.me/50943469824";
global.sudo = process.env.SUDO || "50943469824";
global.owner = process.env.OWNER_NUMBER || "PUT YOUR OWNER NUMBER";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JlU1lBSnRCMngyKy9QNTg4dHdETjhVUmtWWEc5R2J1OUJ2elVVdTVYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEtVZTlvalRmUmpQbjkvd2FVd2x6TEVTaUZoYTBjUmEybHRqYzdPUXpoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUHFEYytaMzc1SXA0ZDJsRng1ZXprN0QrS1pNTy93cnRSY0ZSbDNLNzJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJid2RIYVVDMFlIZ1Zob0Z5eEZONThQaDFnTjFSNHYrUUNVVm5zeHpFQ20wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOZjZxZEpadDM2NGY0NCtOSEVGZXpOaHd2Q1BldlJ0WGdINTduRmVzSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg0MG9FL1pDdWI3QS9WQXNIUzE4V2dFZHBlU0pIckZmSjdhZjVPRi9QeU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lmUnRoRGlEWmdSV0RsOWFoenF2MmQwN2ZoZHp3UW9EZGJkZGZUNHcyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGNBeDQ4cjFjNXNUUDRLSkRLTWZiM1VodmhIU2JsZ2gxMVgzY2dpdFR3Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qZUw5bWxuUzJmTkJPYi95K2locC9Fd0lxVTZaNUhkSGtNQjlSblJUcC9LcHVyTWt5MzFzM3IxMzd2M2thUlhRWFo0R2hzeHNVWlBFcnpubytQWkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJObDZ1V2lGOFJWb3NCODNNd1BNVmZXNG53b0lzaUN6WFNBaUZoZ09FZThFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4TmdUUGdneVJlR3o1alBzVlU2ZHhBIiwicGhvbmVJZCI6Ijg1NDJjNmYxLTg1NjEtNDNiZC04NDVkLTYzNDI2MDIyNjNmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSkYzQlBRcXZGWVg3OHgzZUE4VmJjMCtWanM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlJME5PZlF6QXFzNGorc2I0WWl6NXF1bFQ4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY3VEpYRjUzIiwibWUiOnsiaWQiOiI1MDk0MzQ2OTgyNDoxMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDNBeEZjUTFzZm91Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZk5hbDBJRUl0dWtwTVI0RnVJVXRhSlhiMWpqRng4MXF2MTduRENVMFpDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM2gxZW5JYU1XNHNudFF0emhueFJNYjdmUkpqNjg5bEExRnJvb1pCZzdzRzZUQlNvMHJ5aWxhZnpHdTNTb1VpTm1KZGJYQXNpenRWd1NqdjVSbkVWRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InF2Q29xbjJpL1AxSDBha3lOT3FDYUpHTWQ5RXF3MCtzOXhpbGs1VDBjRWlFdTVQdllhTnkxbmw5VTRaZVRVNDY2cU9yN1l4T2U3MGhzbWl4c2UrOUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDM0Njk4MjQ6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHpXcGRDQkNMYnBLVEVlQmJpRkxXaVYyOVk0eGNmTmFyOWU1d3dsTkdRcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzk2MDY3NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKeWMifQ==
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "Fast",
  packname: process.env.PACK_NAME || "Fast-𝐌𝐃",
  botname: process.env.BOT_NAME || "Fast-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "fast_player",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

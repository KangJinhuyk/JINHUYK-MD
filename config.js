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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RjM2xRWU0rNUFMYVpUZmIrQ2w3dXhMS3J0MjNWdlJnb1VRUEhDRjlGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEVkOEtmVkhGbkhFZVgvb1BxL3cwNVc5aE1WZFBnZEN4ejg4aFZyOWFsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQnIrdHhRYm4rL1A1MW4rM3RjWEwwanBVMWM3dTlCcnBtMTVwVStIK2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKd0lGcEl0THpUcWx6TWF6VVJSaWk0OWFWSC9aNXFBcmhtc3dKSXQ1T21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJOVpjTE9FREh1R0ZEbnRqN01nMW5pOFdEaXZSTlhRTklvU2txb0RDVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp4cGNwd051RVRNMlBsSExGeEhIN2FRRHJ3NHBISFV4WWY4UE5pdXFGbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU82L29QQjQ1R3FPRGV0cEdkbUpGSnVQUlNwbUtKdVJrYmtyenJxdjVuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEpybi9sVEpDeEY5R3FEQlhlOTdMSVVNQWhRZlJRdW4rMEQwTXlGQXBqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB6eCs3a0crZXFDWisrc2t3bjVKTlZIbFRrU3dlZVlXYTZ6TVJadE5oNlNHSHpnZ3Q4RG4zbDRYYi83eEpFcVI4SDhMZ3J4TUpMeXFha3lhSVYxYUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6InJPb1ZpemtHS1NJQ3hjUU1Iam9hOEZXdU9EYjEwV3ZnRGU1YzJQZ2JaMmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZvUW5mbzhXU0UtbENhcUJTU09wV3ciLCJwaG9uZUlkIjoiMGJlMDBlOGItODE1NC00OWZkLTljMjMtZGY3ZDU2MzBjY2Y4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ3SkZNQW1XYVd1WURjWitwb3FoZU9kbnN0Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5T0xMaGdZbkROWnIwSXdzY1JJcG5pRXZhZXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjhSR1Y0R1IiLCJtZSI6eyJpZCI6IjUwOTQzNDY5ODI0OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pmb44CY8J2QgvCdkJHwnZCE8J2QhPCdkI/wnZCY44CZ4pmb8J2UifCdlJ7wnZSw8J2UseKcnvCdlK3wnZSp8J2UnvCdlLbwnZSi8J2Ur/CfjbcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmQXhGY1FscnJkdWdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZOYWwwSUVJdHVrcE1SNEZ1SVV0YUpYYjFqakZ4ODFxdjE3bkRDVTBaQ289IiwiYWNjb3VudFNpZ25hdHVyZSI6IllzTFBQMVl3Y0l1ZnhRa0dobStFNkR3OC9IMzdwNUY5WVRnYTFXKzMyUnkvQWluUlg2Ymt6SjcvbjdXTlJUeUVjU1g3SkhMcFZXa0VVcVJ4bWZtb0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJET1JZVHRkL0dGNlloV0FMVFlrQnV1eEswUFBJU3ZmOGZFWU5Md3JaNnJzYnRzUWJxZkdFLzVvcis2bForSy9SNFdFall5SDFuNkNsUGowZ2gzN2xDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQzNDY5ODI0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHpXcGRDQkNMYnBLVEVlQmJpRkxXaVYyOVk0eGNmTmFyOWU1d3dsTkdRcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzc3ODcyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFZFQifQ==
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF Fast`",
  author: process.env.PACK_AUTHER || "Fast",
  packname: process.env.PACK_NAME || "Fast-𝐌𝐃",
  botname: process.env.BOT_NAME || "fast-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
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

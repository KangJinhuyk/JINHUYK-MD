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
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "22399369990";
global.owner = process.env.OWNER_NUMBER || "23392291649";
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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVzZFNjVzZzTFZhbXArMk1WY0JDb1dPM2RQeUJwV1hYanBmdWpGWVQxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhMMFNYS3pnVGNoOVh6Ync5czNDYmhUUnZZSGxBV0tpMzJIVWlBSlRRbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQTd0dkhQM1krSE5HUy9kWlp3NjB5U2t6b3V4RFdPR3dIWGplUUgvUGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4L2xjdzlpeDJtWUltbUo4L2YvV0VPSjZ4ZnhDVmwxOGEyMTNZR1BPdWlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQdkVUVThpb1d2Z0RRU1ZVbzdxUTVmaHM1bzNKRGlBN21QZ1Bac3pyMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllWOWt0UUk4TUx3eU9Dcmh4bi8zMTVHaEd3RU9ZNllHd21LalhSWEVZQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FyYkYwNTNGSzd2WWxsZlprdmNmTXloRVgyWC9oOUt4Mlk1SWN2Y2owRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXltUjBoODZ1Z3JlSEpnbDlSeE8yNDNxQllUZTBOZWdzTWQxNENyckR5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB4Y3A4VXRCOUZ2NjVXb01HY0RZV2c5NDRqVUYyUjBCUEg0RXBhZkh3SVZxWXM1VzBvemhTdDVsM2lScmdpclFNR3NWNGxsTVRQcTNMc0ZZQlg1c2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IkViaU9qVnQ5L1Q5UUVzSjJydGVSS0JhSk9zalJaaXRjUzdaZEowanlVSVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRWQ2h0WUwwVElHRVJWa2pBZ1RqOHciLCJwaG9uZUlkIjoiNDlmMGQzOWUtMmUwZS00ZWMxLWI1OWMtZjI2YzI2MzgxODE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBJeTlFcDBpNFlWWU5TSTBwY0xjcmlXK1pSQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPa2NNbVFDbS94T2tyd1hFTjF6K25qbE5vV009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzU2QUJBR0siLCJtZSI6eyJpZCI6IjIyMzkyMjkxNjQ5OjMzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWDk5OE1DRUw2ZXpMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyVW16bDJzVVFWZVhkTGpuS1EvdXkzVDVQMVRtdUhmVEZndVJYdjFiaWdjPSIsImFjY291bnRTaWduYXR1cmUiOiJjMU5YTEplRVo4aW1EYkl5d25HQmFoTjBzNFlRVjJ5OHZVUFJWZUdnakpiaHFVNk5oeEJpbXdMeW1RUkpoYlRVWS9rQURERmRZRms2eGhzSWlUanNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia3dkcXpJWDllbVdKbGord1NEYjBWUlRnd3dYL1NVL2xiZDZUbmhQVHBpR0tJZG1pVzdBZkJOZnZ6VFErVTBveWF0RFljMXVSL0Zxem0zU1JWQXNEZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjM5MjI5MTY0OTozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbEpzNWRyRkVGWGwzUzQ1eWtQN3N0MCtUOVU1cmgzMHhZTGtWNzlXNG9IIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNDk2NjUxfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐥𝐢𝐦𝐮𝐥 𝐬𝐚𝐬𝐚𝐤𝐢",
  packname: process.env.PACK_NAME || "𝐬𝐨𝐥𝐢𝐭𝐚𝐢𝐫𝐞-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐥𝐢𝐦𝐮𝐥 𝐬𝐨𝐥𝐢𝐭𝐚𝐢𝐫𝐞-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝐥𝐢𝐦𝐮𝐥 𝐬𝐚𝐬𝐚𝐤𝐢",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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

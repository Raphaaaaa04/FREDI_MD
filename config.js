//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Arusha,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Fred1e/Fredi_md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8b74780a8d18240b1d82.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255686745716,255764182801,255620814108";
global.owner = process.env.OWNER_NUMBER || "+255 612 419 246";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURyV0Q3U3crUnJ1SkhHd0x3L2VtTVM1K09iV25DK0hBOHlYejlPRUExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm1hNmVwZGlqZFBYZVpDeDZCUGgvaFdpeFJwcEUyM0Y0YmZ5QktGcUUwbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTlJYZFVqcEFEZTRxaDRWanVrMWFZMFVFVjdmcUhVOExyZXVoUitmSVVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWEt6Vk9md1BGV1NuVjVhTll6SHcrTURFRUMyeUcyVXJrRjZ5L2tzRENFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQRmJ0bTh1aS81a1Q5Nm9QbUJBU1FqcmUyMkplYWhPSDRvQmYzOS82bTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBEcVJhVHZocExPUUNMbjVSY291bTFwR0pVM2pEUnJRaEtGYnFKL2h5RUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkg1ZzhBd1ZDaWl3T3poT0ZrUmxwRmFkWlphYnY2WTBvY3ltRERaS2ZrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUl0WFAyOVJBTGZCS1VrUVlETENodUorUEpUNWc5dThpcHJJUzErUVFGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZzeFhiZ2t2c1NnMk5IdXF1R1VmS0VZZ1BlRTYvcmkyZDhZMmFrSXpKWG83NUM5Um4vR1ZUNEYrZ3dvcXA0L216MjNsdnJrVVNnRitLOVVaN0JFUmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiI1amc1STltZmduOUJUL0Y1VDZNUlZDTWdkVitaU1QvSVF3TE44bnJHeG0wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxMjQxOTI0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENjY5NjA0NzUzMzZBRUIyQkVBODA0M0E4N0EzQjRFMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDE1NDk2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MTI0MTkyNDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEVGRTY3OEU5MzJFQTJCOTYzRjZGRjgzMDhCOUFCM0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQxNTQ5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQmpudWxnbExSaHliYVNFYlUzWmctQSIsInBob25lSWQiOiI5NDMwZDViYy01ZGI5LTRlYmUtYWFlOC05ZjI2MTc1OGY0ZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Y3Y2NCR3ZvUmszNFNBSS9Cc3gzRnBWYUtFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4K0RjSFh0dFFSMmdoRkxKckJkRGwyR1M5UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaNDg3UkhETCIsIm1lIjp7ImlkIjoiMjU1NjEyNDE5MjQ2OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2UveKEnfCdlLzwnZS78J2VgPCdlLxf8J2Vi/CdlLzihILihI3Jqsm00pPhtI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2OTBMWUJFUGJ5cDdVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNqM2QrSmx6WHNzTlRsTnZLNGVNeWNPeVBnZzc4TFA0UDBoUDc2QXJSVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InIvdTNYQVhyR0Z5bzlCaUFaRHhpRW5TZzFQL2ZjTnNPa1AwanJDM3p0UHdzeUV5em5mR1VWdWRTTS9McUF1T2tsaEZNbFRydzV2VW43d3J1UEVFSkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzbG1zdEhVa2kxMUl5ZFJXdlc4OGxHam11OVEwVzNvNjFRT1QyS0xqSW9KVWZzakkzVmNtdFRXWWM4NlBqY1hLNVEzeFd6aXpmTGdzWUhPd2J2QTBqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYxMjQxOTI0Njo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVvOTNmaVpjMTdMRFU1VGJ5dUhqTW5Ec2o0SU8vQ3orRDlJVCsrZ0swVTkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI0MTU0OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkhNIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is FREDI_MD",
  author: process.env.PACK_AUTHER || "FREDI_MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FREDI_MD",
  ownername: process.env.OWNER_NAME || "FREDI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FREDI").toUpperCase(),
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

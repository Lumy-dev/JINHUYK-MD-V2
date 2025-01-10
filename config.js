/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＪＩＮＨＵＹＫ-Ｖ２ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＫＡＮＧ ＪＩＮＨＵＹＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＳＡＳＡＫＩ ＣＯＭＰＡＧＮＩＥ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/KangJinhuyk/JINHUYK-MD-V2

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------Kang Jinhuyk---------------------------------------
module.exports = {

SESSION_ID: process.env.SESSION_ID || "XJBRWCBK#ahvwOA7Qoz-LJDiKddn-lTvn2bI-wGkoO6-NUhqUBV4",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //TRUE OR FALSE
OWNER_NUMBER: process.env.OWNER_NUMBER || "242056717867",
MODE: process.env.MODE || "PRIVATE",  // PRIVATE OR PUBLIC
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/cLL0MWyT/JINHUYK-MD-V2.jpg", // DO NOT CHANGE
ALIVE_MSG: process.env.ALIVE_MSG || "𝙹𝙸𝙽𝙷𝚄𝚈𝙺 ᴀɪ ɪs ᴀʟɪᴠᴇ. ᴋᴇᴇᴘ sᴜᴘᴘᴏʀᴛɪɴɢ *𝚂𝙰𝚂𝙰𝙺𝙸-𝙲𝙾𝙼𝙿𝙰𝙶𝙽𝙸𝙴🍂*\n\n> ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 𝙺𝙰𝙽𝙶 𝙹𝙸𝙽𝙷𝚄𝚈𝙺",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "/", // .,!/?
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "『 ┃•🌹⛃⃟✮͢𝐼⃪𝐿⃪𝐿⃪𝑈⃪𝑀⃪𝐼⃪𝑁⃪𝐴⃪𝑇⃪𝐼⃪⿴⃟ٍࣽ𝐺⃪𝑅⃪𝐼⃪𝑀⃪𝑀⃪🌹 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE BY KANG JINHUYK 2024 DEC---------------->-

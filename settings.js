/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'ALPHA;;;H4sIAAAAAAAAA5VU25KiSBD9l3rFGLlrG9ERizTKxQuCiLqxDyUUUHK1KBSc8N83aKen52F3tpcHokiy8pw6ebK+g6LENbJQBybfQUXwFVLUL2lXITAB0yaKEAEDEEIKwQRYhm7tzcg7OmLDXNL26nc6YU8iYcTU9cdTe02bt1maBNztFTwGoGpOGQ5+U/AQS3d3WuiiudsyZ66JeDFS4ixjFtLMn17YKMDimzr2xr74Ch59RYgJLmKtSlCOCMws1NkQk6/Rn7+lwtYsDMSYQotdJAmLpcPPMo0p8nn1VtbcYrbXgiObK1+j76wj65xqq53F0yVOnOnsdpNoJWaxtJsXQomv8LS2V8Zmu3nSr3FcoNAIUUEx7b6sO7a1SzNE2TnNjSRYMRGyE0/jznMxWojHlN/tZoRP6xZmh68RX7Ehai6q5qzx2NrBneHJx4XGUctr9dvQWG0Xkq+s5s16s/yVuE0+vJL+H93dtc5GwrUSq/nJ2clWwW+IMxY3x24amCfPzocVleLioufLr9EXBdM/h7lzuwu5x8YGGuPgpGeutg99aW/MogPMiOvext74kz6kDfkdy+FyHKhHVVzr2Txw9CSXFj7X8qelvMUW2hyGPBRy03Q8l/Uit7CWO2EdhFdPNJk22CQhVNRRHVryEnv2FgseszgfYuX1/UQp6owQTLjHABAU45oSSHFZ9DFxAGB4dVFAEH0XF0iZto1l28s6jF5uRyGZKxK7w4KinurpqGNWjRJr4ss0XG5ewQBUpAxQXaNQxzUtSbdEdQ1jVIPJn38NQIFa+mxbDyZwAxBhUlOvaKqshOFHTz9+wiAom4K6XRGo/QIRMGE/w4hSXMR1r2JTQBIk+IrUBNIaTCKY1ejn+RBB4Y/Yz939rhBRiLMaTIBqWtpNXM40M88vgTafK1qsqLECPtE+mvaUReXz4dA8b2W/ce3pjdXKKTbb42rYjhCvLXZ0W1eRsJAiR3z9hyK9bdRC696Y+4wk7VJ19gfXlKA/P6w3DKeeLy8+1XjhTeKyy13ptJaROSbTjHsja7PDRpdWcX2wZ/BtXgi3ueVGF5MovLp57dFCdMUB+hWsFle8PTuZ/Kml/LVdpteDUzRFM7xIuZrZuyA1fOXs1sOwXZ30rWUcmJeEk5LxcCEXO0gNnV9Is8a/cw5pBfaMz7Z+3jztlL/7GIdgAnhJHI2lkcxK7Ggijf6ov936fsCq+lYgCgYge0+T5Rd5JPdvWZL4PrGPf0xG9uNGwu+u6Sv3nxFG7wNewB7vv5GeGvROYh+DX2r8uDL+ZeymG1pdh92BZTKSnm/BamopBxz422iMBJqo3MkbWfuXjtmzCDwefw1AlUEalSQHEwCLkJQ4BANAyqa3plFE5W/AVMUztPgpYgZrqnzafYtzVFOYV2DCjcSRzIq8LDyzbFJWOqwTMAGcJSa6CAYg75SqcimkH9MDlP4x7il4/A3qKK8JVwcAAA==';

const prefix = process.env.PREFIX || '💀';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254785760507';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};

const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const app = express();

const TOKEN = "8131992378:AAEDLBlSQfN7DTEl3b1SB1BBdHBExhrvJsg"; // <-- apna token yahan daal
const URL = "https://haq-5.onrender.com"; // <-- Render ka URL

const bot = new TelegramBot(TOKEN);
bot.setWebHook(`${URL}/bot${TOKEN}`);

app.use(express.json());

app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Bot chal gaya bhai!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Bot server running on port ${port}`);
});

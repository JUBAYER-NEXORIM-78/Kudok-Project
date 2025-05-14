module.exports = {
  config: {
    name: "spam",
    version: "1.0",
    author: "Jubayer",
    countDown: 5,
    role: 1,
    shortDescription: {
      en: "Spam a message multiple times"
    },
    longDescription: {
      en: "Send a specific message a number of times using: !spam <message> - <count>"
    },
    category: "fun",
    guide: {
      en: "{pn} <message> - <count>\nExample: {pn} hello - 10"
    }
  },

  onStart: async function ({ message, args }) {
    const input = args.join(" ");
    if (!input.includes(" - ")) {
      return message.reply("Please use the correct format. ");
    }

    const [text, countStr] = input.split(" - ");
    const count = parseInt(countStr);

    if (!text || isNaN(count) || count < 1) {
      return message.reply("Invalid format or count.");
    }

    if (count > 300) return message.reply("Maximum 300 messages allowed at a time.");

    for (let i = 0; i < count; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      message.send(text);
    }
  }
};

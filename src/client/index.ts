import { create } from "venom-bot";

const whatsapp = create("bot");
whatsapp.then((client) => {
  client.onMessage((message) => {
    if (!message.isGroupMsg) {
      client.sendText(
        message.from,
        `Olá, ${message.sender.pushname}! Sua mensagem foi recebida!`
      );
    }
  });
});

export { whatsapp }

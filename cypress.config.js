const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
    on('task', {
        sendEmail({ url, status }) {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'galileoguilhermeqa@gmail.com',
              pass: 'qvie ehyq osph txws',
            },
          });

          const mailOptions = {
            from: 'seu-email@gmail.com',
            to: 'destinatario@gmail.com',
            subject: `Site Offline: ${url}`,
            text: `O site ${url} retornou um status ${status}. Verifique o problema.`,
          };

          return transporter.sendMail(mailOptions).then(() => true).catch((err) => {
            console.error('Erro ao enviar e-mail:', err);
            return false;
          });
        },
      });
    },
  },
};

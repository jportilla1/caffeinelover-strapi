// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
//       providerOptions: {
//         apiKey: env("SENDGRID_API_KEY"),
//       },
//       settings: {
//         defaultFrom: "jportilla0921@gmail.com",
//         defaultReplyTo: "jportilla0921@gmail.com",
//         testAddress: "jportilla0921@gmail.com",
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Cambiar a true si usas SSL
        auth: {
          user: env("GMAIL_USER"), // Tu correo de Gmail
          pass: env("GMAIL_PASSWORD"), // Contraseña de aplicaciones de Gmail
        },
      },
      settings: {
        defaultFrom: env("GMAIL_USER"), // Remitente del correo
        defaultReplyTo: env("GMAIL_USER"), // Dirección de respuesta
      },
    },
  },
});

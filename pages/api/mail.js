import nodemailer from 'nodemailer';

export default async (req, res) => {
  console.log(req.body);
  const {name, emailOrPhone, text} = req.body;
  // await sendMail({
  //   name,
  //   emailOrPhone,
  //   text
  // });
  console.log(name, emailOrPhone, text, process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${name} <contatodaniealamota.adv>`, // sender address
    to: "danyelarodriguesmota@gmail.com", // list of receivers
    subject: "Contato Site", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>Telefone ou email para contato: ${emailOrPhone}<br> Mensagem: ${text}<p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

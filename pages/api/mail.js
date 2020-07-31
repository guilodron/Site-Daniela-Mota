import nodemailer from 'nodemailer';

export default async (req, res) => {
  console.log(req.body);
  const {name, emailOrPhone, text} = req.body;
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

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

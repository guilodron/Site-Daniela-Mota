import sendMail from '../../utils/sendMail';

export default async (req, res) => {
  console.log(req.body);
  const {name, emailOrPhone, text} = req.body;
  await sendMail({
    name,
    emailOrPhone,
    text
  });
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

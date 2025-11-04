
import nodemailer from 'nodemailer'

const sendMail = async (infoData) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }

  });

  transporter.sendMail({
    from: `Food Delivery<${process.env.NODEMAILER_USER}>`,
    to: `${infoData.email}`,
    subject: "Welcome!!!",
    text: "Welcome to our food and delivery service", // plain‑text body
    html: "<b>Thank you<b/> ",
  }, (err, info) => {
    if (err) {
      console.log(err, "Message can't be delivered")
    } else {
      console.log("Message send successfully!!", info)

    }


  });

}

export default sendMail;

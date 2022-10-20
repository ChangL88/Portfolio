import nodemailer from "nodemailer"
require('dotenv').config()


export default function handler(req, res) {
    const PASSWORD = process.env.password
    const USERNAME = '6ee9d680be3fd3'
    const body = req.body
  
    // // Optional logging to see the responses
    // // in the command line where next.js app is running.
    // console.log('body: ', body.name)
  
    // if (!body.name || !body.message) {
    //   return res.status(400).json({ data: 'Name or email address not found' })
    // }
  
    // res.status(200).json({ data: `${body.name} ${body.message}` })
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 2525,
        host: "smtp.mailtrap.io",
        auth: {
            user: USERNAME,
            pass: PASSWORD
        }
    });

    const mailData = {
        from: USERNAME,
        to: 'dummytest8888s@gmail.com',
        subject: `Portfolio - Message From ${body.name}`,
        text: `${body.message} | Sent from: ${body.email}`,
        html: `<div>${body.message}</div><p>Send from: ${body.email}</p>`
    }

    transporter.sendMail(mailData, (err, info) => {
        if(!err){
            console.log(info)
        }
        console.log(err)
    })

    res.status(200)
  }
  
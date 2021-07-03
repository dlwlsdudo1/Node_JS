// npm install nodemailer

const nodemailer = require('nodemailer');
// sign in  https://mailtrap.io
const email = {
    host: "//",
    port: 2525,
    auth: {
      user: "//",
      pass: "//"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
        console.log(error);
    }else{
        console.log(info);
        return info.response;
      }
    });
};

let email_data = {
    from: "xxx@xxx.com",
    to: 'xxx@xxx.com',
    subject: "Test mail",
    text: 'node js 이용 이메일 테스트'
}

send(email_data);

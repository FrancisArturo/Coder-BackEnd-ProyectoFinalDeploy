import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
    service: "gmail",
    user: "smpt.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PSW_EMAIL
    },
});


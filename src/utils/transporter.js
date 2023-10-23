import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
    service: "gmail",
    user: "smpt.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: EMAIL,
        pass: PSW_EMAIL
    },
});


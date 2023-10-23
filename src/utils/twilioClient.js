import  twilio  from "twilio";


export const client = twilio(process.env.SMS_ACC_SID, process.env.SMS_AUTH_TOKEN);


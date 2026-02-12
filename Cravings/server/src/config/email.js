
// import dotenv from "dotenv"
// dotenv.config();
import nodemailer from "nodemailer";


const sendEmail = async (to, subject, message) => {
    try {

        console.log("Starting Sending Email")

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSCODE,
            },
        });
        console.log("Starting Sending Email")
        const mailOption = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html: message,
        };
        console.log("Sending Email")
        const res = await transporter.sendMail(mailOption);
        console.log(res)

    } catch (error) {
        console.log(error);
    };


}
export default sendEmail;
// sendEmail("yugantnath2002@gmail.com",
//     "testEmail",
//     "<p style='colour:red;' > Yugant </p>"
// );

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "adityaverma9907@gmail.com",
        pass: "jhhaclqgnbsahozi"
    }
});

async function sendEmail() {
    try {
        const info = await transporter.sendMail({
            from: '"FitWave" <adityaverma9907@gmail.com>',
            to: "aditya1203.be22@chitkara.edu.in,aashi1123.be22@chitkara.edu.in,abhima1151.be22@chitkara.edu.in,adarsh1177.be22@chitkara.edu.in",
            subject: "Welcome to FitWave!",
            text: "Welcome to FitWave!",
            html: `
            <html>
                <head>
                    <style>
                        @media only screen and (max-width: 600px) {
                            .main {
                                width: 320px !important;
                            }
                            .top-image {
                                width: 100% !important;
                            }
                            .inside-footer {
                                width: 320px !important;
                            }
                            table.contenttable {
                                width: 320px !important;
                                text-align: left !important;
                            }
                            td.force-col {
                                display: block !important;
                            }
                            td.rm-col {
                                display: none !important;
                            }
                            .mt {
                                margin-top: 15px !important;
                            }
                            *[class].width300 { 
                                width: 255px !important; 
                            }
                            *[class].block { 
                                display: block !important; 
                            }
                            *[class].blockcol { 
                                display: none !important; 
                            }
                            .emailButton {
                                width: 100% !important;
                            }
                            .emailButton a {
                                display: block !important;
                                font-size: 18px !important;
                            }
                        }
                    </style>
                </head>
                <body style="font-family: Arial, sans-serif; color: #555; margin: 0; padding: 0;">
                    <table class="main contenttable" align="center" style="font-weight: normal; border-collapse: collapse; border: 0; margin-left: auto; margin-right: auto; padding: 0; font-size: 16px; line-height: 26px; width: 600px; background-color: white;">
                        <tr>
                            <td class="border" style="border-collapse: collapse; border: 1px solid #eeeff0; padding: 0; color: #555; font-size: 16px; line-height: 26px;">
                                <table style="font-weight: normal; border-collapse: collapse; border: 0; margin: 0; padding: 0;">
                                    <tr>
                                        <td class="side title" style="border-collapse: collapse; border: 0; padding: 20px; color: #555; font-size: 16px; line-height: 26px; vertical-align: top; background-color: white;">
                                            <table style="font-weight: normal; border-collapse: collapse; border: 0; margin: 0; padding: 0;">
                                                <tr>
                                                    <td class="head-title" style="color: #333; font-size: 28px; line-height: 34px; font-weight: bold; text-align: center;">
                                                        Welcome to FitWave, Reeshab Kumar!
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="sub-title" style="color: #555; font-size: 18px; line-height: 29px; font-weight: bold; text-align: center;">
                                                        We're excited to have you on board!
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="top-padding" style="padding: 5px;"></td>
                                                </tr>
                                                <tr>
                                                    <td class="grey-block" style="color: #555; font-size: 16px; line-height: 26px; background-color: #f9f9f9; text-align: center;">                                                        <strong>What's next?</strong><br>
                                                        Explore our features, and get started with personalized workout plans and more. <br><br>
                                                        <a href="https://fitwave-smartwave.netlify.app/" style="color: #ffffff; background-color: #00a5b5; border: 10px solid #00a5b5; border-radius: 3px; text-decoration: none; padding: 10px 20px; display: inline-block;">Get Started</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="top-padding" style="padding: 15px 0;">
                                                        <hr size="1" color="#eeeff0">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text" style="color: #555; font-size: 16px; line-height: 26px;">
                                                        <p>Hello Reeshab,</p>
                                                        <p>Welcome to FitWave! We’re thrilled to have you join our fitness community. Our platform offers a variety of features designed to help you achieve your fitness goals, including personalized workout plans, a comprehensive calorie tracker, and access to expert trainers.</p>
                                                        <p>Feel free to explore our platform and make the most of your experience. If you have any questions, don’t hesitate to reach out to our support team.</p>
                                                        <p>Best regards,<br>The FitWave Team</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text" style="text-align: center;">
                                                        <a href="https://your-platform-url.com/contact" style="color: #ffffff; background-color: #00a5b5; border: 20px solid #00a5b5; border-radius: 3px; text-decoration: none; padding: 10px 20px; display: inline-block;">Contact Us</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" align="center" style="padding: 20px; font-size: 16px; line-height: 26px; background-color: #f9f9f9; text-align: center;">
                                            <table>
                                                <tr>
                                                    <td style="padding: 10px;">
                                                        <a href="https://x.com/KaplishAditya" style="color: #00a5b5;">Twitter</a>
                                                    </td>
                                                    <td style="padding: 10px;">
                                                        <a href="https://www.linkedin.com/in/aditya-verma-a12457260/" style="color: #00a5b5;">Linked In</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                                        <td valign="top" class="footer" style="color: #555; font-size: 12px; line-height: 16px; text-align: center;">
                                            <table style="font-weight: normal; border-collapse: collapse; border: 0; margin: 0; padding: 0;">
                                                <tr>
                                                    <td class="inside-footer" align="center" valign="middle">
                                                        <div id="address">
                                                            <b>FitWave</b><br>
                                                            123 Fitness St.<br>
                                                            Fitness City, FC 12345<br>
                                                            <a href="https://fitwave-smartwave.netlify.app" style="color: #00a5b5;">Contact Us</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>`,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendEmail();

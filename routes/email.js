const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
    const transport = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        auth: {

            user: 'updates.sft@gmail.com',
            pass: 'xcnladctwjodmnic'


        }
    })


    // user: 'corp.sft@gmail.com',
    // pass: 'skfyglracnfckxca'
    // user: 'nukhba.shops@gmail.com',
    // pass: 'ahvbfisxkhyfbxjo'


    const mailOption = {
        from: "updates.sft.gmail.com",
        to: "corp.sft@gmail.com",
        subject: "SFT New User Alert",
        html: ` <div style='text-align: center;background-color:#000000;padding:30px;font-family: Arial, sans-serif;'>
        <h1 style='color:#FFF;text-align:center;' \>New L${req.body.level} User Created</h1>


        \n<h2 style='color:#FFF;text-align:center;text-decoration:underline;'>User Details</h2>\n
        <center>
            <table style='border:1px solid #FFF;padding:10px'>



                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Full Name</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.fullName}</p>
                    </td>
                </tr>
                <tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Username</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.name}</p>
                    </td>
                </tr>

                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Email</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.email}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Phone Number</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.phoneNumber}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Wallet Address</p>
                    </th>
                    <td style="">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.walletAddress}</p>
                    </td>
                </tr>


            </table>
        </center>
    </div>`
    }

    transport.sendMail(mailOption, function (err, info) {
        if (err) {
            res.send(err)
        } else {
            res.send({ success: true })
        }
    })


})
router.post('/levelup', async (req, res) => {
    const transport = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        auth: {

            user: 'updates.sft@gmail.com',
            pass: 'xcnladctwjodmnic'


        }
    })


    // user: 'corp.sft@gmail.com',
    // pass: 'skfyglracnfckxca'
    // user: 'nukhba.shops@gmail.com',
    // pass: 'ahvbfisxkhyfbxjo'


    const mailOption = {
        from: "updates.sft@gmail.com",
        to: "corp.sft@gmail.com",
        subject: "SFT New User Alert",
        html: ` <div style='text-align: center;background-color:#000000;padding:30px;font-family: Arial, sans-serif;'>
        <h1 style='color:#FFF;text-align:center;' \>User Level Up To L${req.body.level}</h1>


        \n<h2 style='color:#FFF;text-align:center;text-decoration:underline;'>User Details</h2>\n
        <center>
            <table style='border:1px solid #FFF;padding:10px'>



                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Full Name</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.fullName}</p>
                    </td>
                </tr>
                <tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Username</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.name}</p>
                    </td>
                </tr>

                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Email</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.email}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Phone Number</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.phoneNumber}</p>
                    </td>
                </tr>
                <tr>
                   <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Current Level</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.level}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Total Referrals</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.totalReferrals}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Wallet Address</p>
                    </th>
                    <td style="">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.walletAddress}</p>
                    </td>
                </tr>
                


            </table>
        </center>
    </div>`
    }

    transport.sendMail(mailOption, function (err, info) {
        if (err) {
            res.send(err)
        } else {
            res.send({ success: true })
        }
    })


})

router.post('/withdrawrequest', async (req, res) => {
    const transport = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        auth: {

            user: 'updates.sft@gmail.com',
            pass: 'xcnladctwjodmnic'


        }
    })


    // user: 'corp.sft@gmail.com',
    // pass: 'skfyglracnfckxca'
    // user: 'nukhba.shops@gmail.com',
    // pass: 'ahvbfisxkhyfbxjo'


    const mailOption = {
        from: "updates.sft@gmail.com",
        to: "corp.sft@gmail.com",
        subject: "SFT New User Alert",
        html: ` <div style='text-align: center;background-color:#000000;padding:30px;font-family: Arial, sans-serif;'>
        <h1 style='color:#FFF;text-align:center;' \>User $${req.body.amount} Withdraw Request</h1>


        \n<h2 style='color:#FFF;text-align:center;text-decoration:underline;'>User Details</h2>\n
        <center>
            <table style='border:1px solid #FFF;padding:10px'>



                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Full Name</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.fullName}</p>
                    </td>
                </tr>
                <tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Username</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.name}</p>
                    </td>
                </tr>

                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Email</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.email}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Phone Number</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.phoneNumber}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Current Level</p>
                    </th>
                    <td style="border-bottom:1px solid #FFF">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.level}</p>
                    </td>
                </tr>
                <tr>
                    <th style="border-right:1px solid #FFF;">
                        <p style="color:#FFF;text-align:start;padding-right:10px;">Wallet Address</p>
                    </th>
                    <td style="">
                        <p style="color:#FFF;text-align:start;padding-left:10px;">${req.body.walletAddress}</p>
                    </td>
                </tr>
             


            </table>
        </center>
    </div>`
    }

    transport.sendMail(mailOption, function (err, info) {
        if (err) {
            res.send(err)
        } else {
            res.send({ success: true })
        }
    })


})


module.exports = router
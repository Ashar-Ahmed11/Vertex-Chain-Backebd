const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = "ashar.2day@karachi"
const fetchuser = require('../middleware/fetchUser')



router.post('/transfer/:to/:amount', fetchuser, async (req, res) => {
    try {
        const receiver = req.params.to
        const amount = Number(req.params.amount)
        const userID = req.user
        const senderUser = await User.findById(userID)
        const receiverUser = await User.findOne({ walletAddress: receiver })
        let transaction = senderUser.transfers
        transaction.push({ to: receiver, from: senderUser.walletAddress, amount: amount })
        let oldUser = await User.findByIdAndUpdate(userID, {
            $set: {

                
                currentUserBalance: senderUser.currentUserBalance - amount,
                totalTransfer: senderUser.totalTransfer + amount,
                transfers: transaction

            }
        }, { new: true })
        let receiverTransaction = receiverUser.transfers
        receiverTransaction.push({ to: receiver, from: senderUser.walletAddress, amount: amount })
        let toUser = await User.findOneAndUpdate({ walletAddress: receiver }, {
            $set: {

                totalAmount: receiverUser.totalAmount + amount,
                currentUserBalance: receiverUser.currentUserBalance + amount,
                totalTransfer: receiverUser.totalTransfer + amount,
                transfers: receiverTransaction

            }
        }, { new: true })

        res.send({ success: true })


        // console.log(receiver);
        



    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some internal server error")
    }

})
router.post('/withdrawl/:amount', fetchuser, async (req, res) => {
    try {

        const amount = Number(req.params.amount)
        const userID = req.user
        const senderUser = await User.findById(userID)
        let transaction = senderUser.withdraws
        transaction.push({ status: "pending", amount: amount })
        let oldUser = await User.findByIdAndUpdate(userID, {
            $set: {


                currentUserBalance: senderUser.currentUserBalance - amount,
                withdrawlAmount: senderUser.withdrawlAmount + amount,
                withdraws: transaction

            }
        }, { new: true })

        res.send({ success: true })



    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some internal server error")
    }

})
router.post('/confirmWithdraw/:userid/:withdrawid', async (req, res) => {
    try {
        const receiver = req.params.withdrawid
        const amount = Number(req.params.amount)
        const userID = req.params.userid
        const senderUser = await User.findById(userID)
    
        let oldUser = await User.findOneAndUpdate({ walletAddress: senderUser.walletAddress, "withdraws._id": receiver }, {
            $set: {


                "withdraws.$.status": "Completed"

            }
        }, { new: true })

        res.send({ success: true })



    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some internal server error")
    }

})
router.post('/stakingepoch', async (req, res) => {
    try {

        const allUsers = await User.find({})

        for (let index = 0; index < allUsers.length; index++) {
            const e = allUsers[index];
            if (e.level == 1) await User.findByIdAndUpdate(e._id, {
                $inc: {



                    stakingAmount: 0.66,
                    currentUserBalance: 0.66,
                    totalAmount: 0.66

                }
            }, { new: true })
            if (e.level == 2) await User.findByIdAndUpdate(e._id, {
                $inc: {



                    stakingAmount: 0.66,
                    currentUserBalance: 0.66,
                    totalAmount: 0.66

                }
            }, { new: true })
            if (e.level == 3) await User.findByIdAndUpdate(e._id, {
                $inc: {



                    stakingAmount: 0.66,
                    currentUserBalance: 0.66,
                    totalAmount: 0.66

                }
            }, { new: true })
            if (e.level ==4) await User.findByIdAndUpdate(e._id, {
                $inc: {



                    stakingAmount: 3.33,
                    currentUserBalance: 3.33,
                    totalAmount: 3.33

                }
            }, { new: true })
            if (e.level > 4) await User.findByIdAndUpdate(e._id, {
                $inc: {



                    stakingAmount: 6.66,
                    currentUserBalance: 6.66,
                    totalAmount: 6.66

                }
            }, { new: true })
        }
        // res.send(allUsers)
        res.send({ success: true })



    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some internal server error")
    }

})



module.exports = router
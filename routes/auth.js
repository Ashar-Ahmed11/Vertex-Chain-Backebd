const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = "ashar.2day@karachi"
const fetchuser = require('../middleware/fetchUser')

router.post('/createuser/:user?', async (req, res) => {

    try {
        const referralUser = req.params.user
        let success = false
        const userWithEmail = await User.findOne({ email: req.body.email })
        const userWithWallet = await User.findOne({walletAddress:req.body.walletAddress})
        if (userWithEmail) {
            return res.status(400).json({ error: "A user with this email already exists, Please enter another email!" })
        }
        if (userWithWallet) {
            return res.status(400).json({ error: "A user with this wallet already exists, Please connect another wallet!" })
        }
         else {
            const salt = await bcrypt.genSalt(10)
            const secPass = await bcrypt.hash(req.body.password, salt)



            const user = await User.create({
                walletAddress: req.body.walletAddress,
                fullName: req.body.fullName,
                phoneNumber: req.body.phoneNumber,
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                amount: req.body.amount,
                initialLevel: req.body.initialLevel,
                level: req.body.initialLevel

            })
            const data = {
                user: {
                    id: user.id
                }
            }


            const newUser = await User.findById(user.id).select('-password')
            const { name, fullName, walletAddress } = newUser
            const referrerUser = await User.findOne({ walletAddress: referralUser })

            // console.log(newReferrals);

            if (referrerUser) {
                let newReferrals = referrerUser.referrals
                let bonus
                let currentLevel = referrerUser.level
                newReferrals.push({ name, fullName, walletAddress })
                if (referrerUser.level == 1) bonus = 10
                if (referrerUser.level == 2) bonus = 10
                if (referrerUser.level == 3) bonus = 10
                if (referrerUser.level == 4) bonus = 50
                if (referrerUser.level >= 5) bonus = 100
                if (referrerUser.initialLevel < 4) {
                    if (referrerUser.referrals.length == 10) currentLevel = 2
                    if (referrerUser.referrals.length == 25) currentLevel = 3
                    if (referrerUser.referrals.length == 45) currentLevel = 4
                    if (referrerUser.referrals.length == 55) currentLevel = 5
                    if (referrerUser.referrals.length == 60) currentLevel = 6
                }
                if (referrerUser.initialLevel == 4) {
                    if (referrerUser.referrals.length == 10) currentLevel = 5
                    if (referrerUser.referrals.length == 15) currentLevel = 6
                }
                if (referrerUser.initialLevel == 5) {
                    if (referrerUser.referrals.length == 5) currentLevel = 6
                }
                let oldUser = await User.findByIdAndUpdate(referrerUser._id, {
                    $set: {
                        referralBonus: referrerUser.referralBonus + bonus,
                        totalAmount: referrerUser.totalAmount + bonus,
                        currentUserBalance: referrerUser.currentUserBalance + bonus,
                        level: currentLevel,
                        referrals: newReferrals
                    }
                }, { new: true })
            }



            const authToken = jwt.sign(data, JWT_SECRET)
            success = true
            res.json({ success: success, authToken: authToken, userName: user.name })
        }
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some internal server error")
    }

})

router.post('/login', async (req, res) => {

    let success = false
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(500).json({ error: "Please enter correct credentials" })
        }
        const passCheck = await bcrypt.compare(req.body.password, user.password)
        if (!passCheck) {
            return res.status(500).json({ error: "Please enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        success = true
        res.json({ success: success, authToken: authToken, userName: user.name, walletAddress: user.walletAddress })

    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "Some internal server error occured" })
    }
})

router.post('/getuser', fetchuser, async (req, res) => {

    try {

        const userID = req.user
        const user = await User.findById(userID).select('-password')
        res.send(user)

    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "Some intenral server error occured!" })
    }
})

router.post('/getusers', async (req, res) => {

    try {

        // const userID = req.user
        const user = await User.find({}).select('-password')
        res.send(user)

    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "Some intenral server error occured!" })
    }
})

router.post('/getuserfromwallet/:walletAddress', async (req, res) => {

    try {

        // const userID = req.user
        const user = await User.findOne({ walletAddress: req.params.walletAddress }).select('-password')
        if (user) {
            res.send(user)
        }
        else{
            res.status(404).json({error:"User Not Found!"})
        }



    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "Some intenral server error occured!" })
    }
})



module.exports = router
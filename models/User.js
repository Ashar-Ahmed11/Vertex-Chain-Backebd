const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({

    walletAddress: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    initialLevel: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    referralBonus: {
        type: Number,
        default: 0
        // required: true
    },
    stakingAmount: {
        type: Number,
        default: 0
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    currentUserBalance: {
        type: Number,
        default: 0
    },
    withdrawlAmount: {
        type: Number,
        default: 0
    },
    withdraws: [
        {
            status: {
                type: String,
            },
            amount: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    referrals: [
        {
            name: {
                type: String,
            },
            fullName: {
                type: String,
            },
            walletAddress: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    totalTransfer: {
        type: Number,
        default: 0
    },
    transfers: [
        {
            from: {
                type: String,
            },
            to: {
                type: String,
            },
            amount: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],


    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema)
User.createIndexes()
module.exports = User
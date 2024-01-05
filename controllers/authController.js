const User = require('../models/user')
const CryptoJs = require('crypto-js')
const jwt = require("jsonwebtoken")

module.exports = {
    createUser: async (req, res) => {
        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(req.body.password, 'ECOMMERCE2023').toString(),
            location: req.body.location,
        })
        try {
            await newuser.save()
            res.status(201).json({message: "new user created!"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    }, loginUser: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email})
            !user && res.status(401).json("Couldn't find user!")

            const decryptPass = CryptoJs.AES.decrypt(user.password, 'ECOMMERCE2023')
            const thePassword = decryptPass.toString(CryptoJs.enc.utf8)

            thePassword !== req.body.password && res.status(401).json('Wrong password')

            const userToken = jwt.sign({id: user._id}, 'ECOMMERCE2023', {expires: '21d'})
            const {password, __v, createdAt, ...others} = user._doc
            res.status(200).json({...others, token: userToken})
        } catch (e) {
            res.status(500).json('can not login! Try again')
        }
    }
}
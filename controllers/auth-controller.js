const bcrypt = require('bcrypt')
const {createUserToken} = require('../middleware/auth')
const {User} = require('../models')
console.log(User)

async function register (req, res, next){
    try {
        
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(req.body.password, salt)

        const pwCache = req.body.password

        req.body.password = passwordHash
        const newUser = await User.create(req.body)

        if(newUser){

            req.body.password = pwCache
            const authenticatedUser = await createUserToken(req, newUser)
            
            res.status(201).json({
                user: newUser,
                token: authenticatedUser
            })

        } else {
            throw new Error("Something went wrong with authentication")
        }
        
    }catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

async function login(req,res,next){
    try {

        const loggingUser = req.body.username
        const foundUser = await User.findOne({username: loggingUser})
        const token = await createUserToken(req, foundUser)

        res.status(200).json({token, user: foundUser})

    }catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
} 

module.exports = {
    register,
    login
}
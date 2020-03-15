const {User}=require('../models/user')

module.exports.register=(req,res)=>{
    const data=req.body
    const user = new User(data)
    user.save()
        .then((user)=>
        {
            res.send({
                id:user._id,
                email:user.email
            })
        })
        .catch((err)=>{
            res.send(err)
        })
}

module.exports.login=(req,res)=>{
    const data=req.body

    User.findByCredentials(data.email,data.password)
        .then((user)=>{
            return user.generateToken()
        })
        .then((token)=>{
            res.send({token})
        })
        .catch((err)=>{
            res.send(err)
        })
}

module.exports.logout=(req,res)=>{
    const {user,token}=req

    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
        .then(() => {
            res.send({ notice: 'successfully logged out' })
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.account=(req,res)=>{
    const {user}=req
        res.send(user)
}

module.exports.list=(req,res)=>{
  User.find()
  .then((users)=>{
      res.send(users)
  })
}
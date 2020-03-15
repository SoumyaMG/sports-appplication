const Player=require('../models/player')

module.exports.list=(req,res)=>{
    Player.find()
    .then((players)=>{
        res.send(players)
    })
}

module.exports.create=(req,res)=>{
    const data=req.body
    const player=new Player(data)
    player.save()
        .then((player)=>{
            res.send(player)
        })
        .catch((err)=>{
            res.send(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id

    Player.findByIdAndDelete(id)
        .then((player)=>{
            res.send({notice:'successfully removed',player})
        })
        .catch((err)=>{
            res.send(err)
        })
}
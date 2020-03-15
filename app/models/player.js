const mongoose=require('mongoose')

const Schema=mongoose.Schema

const playerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    stats:{
        Matches_played:{
            type:Number
        },
		Runs:{
            type:Number
        },
		Fours:{
            type:Number
        },
		Sixes:{
            type:Number
        },
		Highest_score:{
            type:Number
        },
		Bating_Avg:{
            type:Number
        },
		Centuries:{
            type:Number
        },
		Half_centuries:{
            type:Number
        },
		No_of_overs:{
            type:Number
        },
		No_of_balls:{
            type:Number
        },
		Wickets:{
            type:Number
        },
		No_Balls:{
            type:Number
        },
		wides:{
            type:Number
        },
		Bowling_Avg:{
            type:Number
        }
    }
})

const Player=mongoose.model('Player',playerSchema)

module.exports=Player
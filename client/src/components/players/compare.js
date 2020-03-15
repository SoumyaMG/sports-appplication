import React from 'react'
import {connect} from 'react-redux'

function Compare(props){
    console.log(props)
    return (
        <div>
            {
                (props.players_to_compare.length<=0)?(
                    <div>
                        {
                            props.history.push('/')
                        }
                    </div>
                ):(
                    <div>
                            <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Statistics</th>
                                {
                                    props.players_to_compare.map((player)=>{
                                        
                                        return <th scope="col" key={player._id}>{player.name}</th>
                                    })   
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(props.players_to_compare[0].stats).map((stat,index)=>{
                                return <tr key={index}><td>{stat}</td>
                                    {
                                        props.players_to_compare.map((player)=>{
                                        return (
                                            <td scope="row" key={player._id}>{player.stats[stat]}</td>
                                        )
                                    })}
                                </tr>
                            })
                        }
                        </tbody>
                    </table><br/>
                    <button type="button" className="btn btn-outline-primary" onClick={()=>{
                        window.location.reload()
                        props.history.push('/')
                    }}>Back</button>
                </div>
                )
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        players:state.players,
        players_to_compare:state.players.filter((player)=>{
            for(let i=0;i<state.compare.length;i++)
            {
                if(player._id===state.compare[i])
                {
                    return player
                }    
            }
        })
    }
}

export default connect(mapStateToProps)(Compare)
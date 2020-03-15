import React from 'react'
import {connect} from 'react-redux'
import {startListPlayers,startPlayerRemove} from '../../redux/actions/players'
import {startComparePlayersAdd,startComparePlayersRemove} from '../../redux/actions/compare'

class List extends React.Component{

    constructor(props){
        super(props)

        this.handeCheckbocChange=this.handeCheckbocChange.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
    }

    componentDidMount(){
        this.props.dispatch(startListPlayers())
    }

    handleRemove(id)
    {
        this.props.dispatch(startPlayerRemove(id))
    }

    handeCheckbocChange(e){
        e.persist()
        if(e.target.checked === true)
        {
            this.props.dispatch(startComparePlayersAdd(e.target.value))
        }
        else {
            this.props.dispatch(startComparePlayersRemove(e.target.value))
        }
    }

    render(){
        return (
            <div>
                <h2 className="mu-2">Popular Cricket Players</h2> 
                {(localStorage.getItem('userAuth')) && <button type="button" className="btn btn-outline-primary" onClick={()=>{
                    this.props.history.push('/players/new')
                }}>Add new Player</button> }
                <br/><br/>
                {console.log(this.props.players)}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            {(localStorage.getItem('userAuth')) && <th scope="col">Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.players.map((player)=>{
                                return (
                                    <tr key={player._id}>
                                        <td scope="row"><input type="checkbox" value={player._id} name={player.name} onChange={this.handeCheckbocChange}/></td>
                                        <td>{player.name}</td>
                                        <td>{player.country}</td>
                                       {(localStorage.getItem('userAuth')) &&
                                       <td><button type="button" className="btn btn-outline-primary" onClick={()=>{
                                            const confirmRemove=window.confirm('Are you sure?')
                                            if(confirmRemove)
                                            {
                                                this.handleRemove(player._id)
                                            }
                                        }}>Remove</button></td>} 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table><br/>
                <p className="text-danger">Select atlease two players</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>{
                this.props.history.push('/compare')
            }}>Compare Stats</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        players:state.players
    }
}

export default connect(mapStateToProps)(List)
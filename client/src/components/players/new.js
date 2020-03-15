import React from 'react'
import {connect} from 'react-redux'
import  {startPlayerAdd} from '../../redux/actions/players'

class New extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            country:"",
                Matches_played:"",
                Runs:"",
                Fours:"",
                Sixes:"",
                Highest_score:"",
                Bating_Avg:"",
                Centuries:"",
                Half_centuries:"",
                No_of_overs:"",
                No_of_balls:"",
                Wickets:"",
                No_Balls:"",
                wides:"",
                Bowling_Avg:""
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleCountryChange=this.handleCountryChange.bind(this)
        this.handleStatsChange=this.handleStatsChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleNameChange(e){
        const name=e.target.value
        this.setState({name})
    }   

    handleCountryChange(e){
        const country=e.target.value
        this.setState({country})
    }

    handleStatsChange(e)
    {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e)
    {
        e.preventDefault()

        let formData={
            name:this.state.name,
            country:this.state.country,
            stats:{
                Matches_played:this.state.Matches_played,
                Runs:this.state.Runs,
                Fours:this.state.Fours,
                Sixes:this.state.Sixes,
                Highest_score:this.state.Highest_score,
                Bating_Avg:this.state.Bating_Avg,
                Centuries:this.state.Centuries,
                Half_centuries:this.state.Half_centuries,
                No_of_overs:this.state.No_of_overs,
                No_of_balls:this.state.No_of_balls,
                Wickets:this.state.Wickets,
                No_Balls:this.state.No_Balls,
                wides:this.state.wides,
                Bowling_Avg:this.state.Bowling_Avg
            }
        }

        this.props.dispatch(startPlayerAdd(formData))

        this.setState({
            name:"",
            country:"",
                Matches_played:"",
                Runs:"",
                Fours:"",
                Sixes:"",
                Highest_score:"",
                Bating_Avg:"",
                Centuries:"",
                Half_centuries:"",
                No_of_overs:"",
                No_of_balls:"",
                Wickets:"",
                No_Balls:"",
                wides:"",
                Bowling_Avg:""
        })

        this.props.history.push('/')
        window.location.reload()
    }


    render(){
        return (
            <div>
                <h1>Add New Player</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                            <label> Name   :</label>
                                <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group col-md-6">
                            <label> Country  : </label>
                                <input type="text" className="form-control" value={this.state.country} name="country" onChange={this.handleCountryChange}/>
                    </div>
                </div>

                <h2 >Statistics</h2>

                <div className="form-row">
                    <div className="form-group col-md-6">
                            <label> Matches_played :</label>
                                <input type="text" className="form-control" value={this.state.Matches_played} name="Matches_played" onChange={this.handleStatsChange}/>
                    </div>
                    <div className="form-group col-md-6">
                            <label> Runs :</label>
                                <input type="text" className="form-control" value={this.state.Runs} name="Runs" onChange={this.handleStatsChange}/>    
                    </div> 
                </div>       

                <div className="form-row">
                    <div className="form-group col-md-6">
                            <label> Fours : </label>
                                <input type="text" className="form-control" value={this.state.Fours} name="Fours" onChange={this.handleStatsChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label> Sixes :</label>
                                <input type="text" className="form-control" value={this.state.Sixes} name="Sixes" onChange={this.handleStatsChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                            <label> Highest_score :  </label>
                                <input type="text" className="form-control" value={this.state.Highest_score} name="Highest_score" onChange={this.handleStatsChange}/>
                    </div>
                    <div className="form-group col-md-6">
                            <label> Bating_Avg : </label>
                                <input type="text" className="form-control" value={this.state.Bating_Avg} name="Bating_Avg"  onChange={this.handleStatsChange}/>
                    </div>
                </div>    
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label> Centuries : </label>
                            <input type="text" className="form-control" value={this.state.Centuries} name="Centuries" onChange={this.handleStatsChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label> Half_centuries : </label>
                            <input type="text"  className="form-control" value={this.state.Half_centuries} name="Half_centuries" onChange={this.handleStatsChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label> No_of_overs :</label>
                            <input type="text" className="form-control" value={this.state.No_of_overs} name="No_of_overs"  onChange={this.handleStatsChange}/>   
                    </div>        
                    <div className="form-group col-md-6">
                        <label> Wickets :</label>
                            <input type="text" className="form-control" value={this.state.Wickets} name="Wickets" onChange={this.handleStatsChange}/> 
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label> No_Balls :   </label>
                            <input type="text" className="form-control" value={this.state.No_Balls} name="No_Balls" onChange={this.handleStatsChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label> wides : </label>
                            <input type="text" className="form-control" value={this.state.wides} name="wides" onChange={this.handleStatsChange}/>
                    </div> 
                </div> 
                <div className="form-row">   
                    <div className="form-group col-md-6">
                        <label> Bowling_Avg : </label>
                            <input type="text" className="form-control"  value={this.state.Bowling_Avg} name="Bowling_Avg" onChange={this.handleStatsChange}/>
                        
                    </div>  
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(New)
import React from 'react'
import axios from '../../config/axios'
import _ from 'lodash'

class Logout extends React.Component{
   
    componentDidMount()
    {
        if (!_.isEmpty(localStorage.getItem('userAuth'))) {
            localStorage.removeItem('userAuth')
            
            axios.delete('/users/logout')
                .then((response)=>{
                    console.log(response.data)
                })
                this.props.history.push('/')
                window.location.reload()
        }
    }

    render(){
        return(
            <div>
                <h2>Loged out Successfully</h2>
                
            </div>
        )
    }
}

export default Logout
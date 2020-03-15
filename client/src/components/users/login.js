import React from 'react'
import axios from '../../config/axios'

class Login extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            users:[],
            email:'',
            password:''
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e)
    {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e)
    {
        e.preventDefault()

        const formData={
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post('/users/login', formData)
            .then((response) => {
                //console.log('resolve', response.data)
                if (response.data.hasOwnProperty('errors')) {
                     //console.log(response.data)
                    this.setState({
                        errMsg: response.data.errors
                    })
                }
                else if(response.data.hasOwnProperty('token')){
                    //console.log(response.data)
                    localStorage.setItem('userAuth', response.data.token)
                    this.props.history.push('/')
                }
                else{
                    alert('invalid credentials')
                    this.props.history.push('/')
                }
            })
            .catch((err) => {
                console.log('reject', err)
            })
    }

    render()
    {
        return(
            <div>
                 <h2>Login only for Admins</h2>
                 <div className="alert alert-primary" role="alert">
                    <p>Admin Credentials-</p>
                    <p>email- soumya@gmail.com</p>
                    <p>password- secrete123</p>
                </div>

                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        
                            <input type="text" id="inputEmail3" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" placeholder="Email"/>
                        </div>
                    </div><br/>
                    <div className="form-row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        
                            <input type="password" id="inputPassword3" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" placeholder="Password"/>
                    </div>
                    </div><br/>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
import React from 'react';
import { Route , Switch , BrowserRouter } from 'react-router-dom'

import List from './components/players/list'
import Compare from './components/players/compare'
import New from './components/players/new'

import Login from './components/users/login'
import Logout from './components/users/logout'

import TopNav from './components/Navigation/top'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="container">

            <TopNav />
        
            <Switch>
              <Route path="/" component={List} exact={true}/>
              <Route path="/compare" component={Compare}/>
              <Route path="/players/new" component={New}/>
              <Route path="/users/login" component={Login}/>
              <Route path="/users/logout" component={Logout}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
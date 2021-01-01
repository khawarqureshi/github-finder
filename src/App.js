
import React, {Fragment, Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Users from './components/user/Users'
import User from './components/user/User'
import axios from 'axios'
import Search from './components/user/Search'
import Alert from './components/Alert'
import About from './components/pages/About'

class App extends Component {
  state = {
    users : [],
    user : {},
    loading : false,
    alert: null
  }
/*   async componentDidMount () {
    this.setState({loading : true})
    const res = await axios.get("https://api.github.com/users")
    this.setState({ users : res.data, loading : false})
    // console.log(res.data)
  } 
 */
  //Search Github Users
  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get
    (`https://api.github.com/search/users?q=${text}`)
    this.setState({ users : res.data.items, loading : false})
  }

  // Get the single github user 
    getUser = async ( username ) => {
      this.setState({loading: true})
    const res = await axios.get
    (`https://api.github.com/users/${username}?`)
    this.setState({ user : res.data, loading : false})
    }

  // clear Users from state 
  clearUsers = () => this.setState ({users : [], loading: false})

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}})

    setTimeout(() => {
      this.setState({ alert: null})
    }, 3000);
  }


  render() {
    return(
      <Router>
      <div>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
         <Switch> 
           <Route exact path = '/' render = { props => (
             <Fragment>
                <Search 
                  searchUsers = {this.searchUsers} 
                  clearUsers = {this.clearUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users loading = {this.state.loading} users ={this.state.users} />
             </Fragment>

           )} />
           <Route exact path = '/about' component = {About} />
           < Route exact path = '/user/:login' render ={props => ( 
             <User {...props} getUser={this.getUser} user={this.state.user} loading = {this.state.loading} />
           )} />
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
}
export default App
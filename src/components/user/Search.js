import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
     state = {
         text : ''
     }
     static propTypes = {
         searchUsers: PropTypes.func.isRequired,
         clearUsers: PropTypes.func.isRequired,
         showClear: PropTypes.bool.isRequired,
         setAlert: PropTypes.func.isRequired,
     }

     onChange = (e) => {
        //  this.setState({text: e.target.value})
       this.setState({[e.target.name]: e.target.value})
     }
     onSubmit = (e) => {
         e.preventDefault();
         if(this.state.text === '') {
             this.props.setAlert('Please Enter Something', 'danger')
         } else {
         this.props.searchUsers(this.state.text)
         this.setState({ text : '' })
         }
     }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit = {this.onSubmit} className="form-group">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..."
                        className ="form-control btn-block"
                        value = {this.state.text}
                        onChange = {this.onChange}  />
                   
                    <input 
                        type="submit" 
                        value="search" 
                        className ="btn btn-dark btn-block" />
                </form>
                { showClear && <button 
                  className="btn btn-secondary btn-block" 
                  onClick={clearUsers} > Clear </button>
                }
             
            </div>
        )
    }
}

export default Search
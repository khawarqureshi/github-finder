import React from 'react'
import {Link} from 'react-router-dom'

 const UserItem = (props) => {
        const {login, avatar_url} = props.user;
        return (
            <div className = "card text-center" style = {{margin:"10px", padding:"10px"}}>
              <img 
              src ={avatar_url} 
              alt= "user-avatar" 
              className ="round-img" 
              style = {{width : "60px", borderRadius : "50%", margin : "auto"}}/>
                {login} 
                <div>
                    <Link to = {`/user/${login}`} className = "btn btn-dark btn-sm my-1" >More</Link>
                </div>
                
            </div>
        )
}

export default UserItem

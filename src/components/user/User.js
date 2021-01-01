import React, { Fragment, Component } from 'react'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './User.css'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading : PropTypes.bool.isRequired,
        user : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired
    }

    render() {
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user

       const {loading} = this.props;
       if(loading) return <Spinner /> 
       return (
            <Fragment>
                <Link to ='/' className='btn btn-light'>
                    Back To Search
                </Link>
                Hireable : {' '}
                {hireable ? ( 
                <i className='fa fa-check text-success'/>
                 ) : ( 
                <i className='fa fa-times-circle text-danger' /> 
                 )}
                 <div className= 'card grid-2 main-parent'>
                     <div className='all-center m-4 mb-5 child1'>
                        <img 
                         src= {avatar_url}
                         className='rounded-circle'
                         alt=''
                         style={{width:'150px'}}
                        />
                        <h6 className='ml-4 mt-2'>{name}</h6>
                        <p><strong> Location : </strong>{location}</p>
                     </div>
                     <div className = 'all-center m-3 child2'>
                         { bio && (
                             <Fragment>
                                 <h4>Bio</h4>
                                 <p>{bio}</p>
                             </Fragment>
                         )}
                         <a href={html_url} className='btn btn-dark my-1'>
                            Visit Github Profile
                         </a>
                         <ul className='ulStyle'>
                             <li style = {{listStyleType : 'none'}}>
                                 {login && <Fragment>
                                     <strong>Username:</strong> {login}
                                 </Fragment> }
                             </li>
                             <li style = {{listStyleType : 'none'}}>
                                 {blog && <Fragment>
                                     <strong>Blog:</strong> {blog}
                                 </Fragment> }
                             </li>
                             <li style = {{listStyleType : 'none'}}>
                                 {company && <Fragment>
                                     <strong>Company:</strong> {company}
                                 </Fragment> }
                             </li>
                         </ul>
                     </div>
                 </div>
                 <div className='card text-center' style={{display:'block', margin:'10px', padding:'10px'}}>
                     <div className='badge badge-primary m-2 p-2'>Followers: {followers}</div>
                     <div className='badge badge-success m-2 p-2'>FOllowing: {following}</div>
                     <div className='badge badge-danger m-2 p-2'>Public Repos: {public_repos}</div>
                     <div className='badge badge-dark m-2 p-2'>Public Gists: {public_gists}</div>

                 </div>
            </Fragment>
        )
    }
}

export default User

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn, email} = props

  return (
    <div>
      <nav>
        {
          isLoggedIn
            ? <div id = "navbar" className="nav-wrapper grey">
             
              <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/home">Home</Link></li>
              <li><a href="#" onClick={handleClick}>Logout</a></li>
              </ul>
              <p> Welcome, {email} </p>
            </div>
            : <div  id = "navbar" className="nav-wrapper grey">
               <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li> <Link to="/login">Login</Link></li>
             <li> <Link to="/signup">Sign Up</Link></li>
             </ul>
            </div>
        }
      </nav>
      
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string
}

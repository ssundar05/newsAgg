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
            ? 
            <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <div>
                <a className="brand-logo left"><img className = "logo" src = "https://image.flaticon.com/icons/svg/227/227035.svg" /><span className = "venNews right">VENNEWS</span></a>
               </div>      
                <ul className="right hide-on-med-and-down">
                  {/* <li >< Link to="/home" id = "navLi">About</Link></li> */}
                  <li ><a href="#"  id = "navLi" onClick={handleClick}>Logout</a></li>
                </ul>
                <p className = 'center handle' id = "navLi"> Welcome, {email} </p>
              </div>
            </nav>
          </div>
            : 
            <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
              <div>
                <a className="brand-logo left"><img className = "logo" src = "https://image.flaticon.com/icons/svg/227/227035.svg" /><span className = "venNews right">VENNEWS</span></a>
              </div>
                <ul className="right hide-on-med-and-down">
                  <li><Link to="/login" id = "navLi" >Login</Link></li>
                  <li><Link to="/signup" id = "navLi">Sign Up</Link></li>
                </ul>
              </div>
            </nav>
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

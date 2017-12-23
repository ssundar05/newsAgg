import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const NavBar = (props) => {
  const {email} = props

  return (
      <div>
    <nav >
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <h5> Welcome, {email} </h5>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    </nav>
   
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(NavBar)

/**
 * PROP TYPES
 */
NavBar.propTypes = {
  email: PropTypes.string
}





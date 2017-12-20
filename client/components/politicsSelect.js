import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import NavBar from './navbar'

/**
 * COMPONENT
 */
export const politicsSelect = (props) => {
  const {email} = props

  return (
    <div>
      <h5> hi </h5>
      {/* <NavBar/> */}
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
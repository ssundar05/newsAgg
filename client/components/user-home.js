import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {findSelectedSources} from '../store'
// import NavBar from './navbar'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.selectedSources(this.props.email)
  }

  render() {
     const { email } = this.props.email
    return (
      <div>
        <h5> hi </h5>
        {/* <NavBar/> */}
      </div>

    )
  }
}
  // export const UserHome = (props) => {
  //   const {email} = props

  //   return (
  //     <div>
  //       <h5> hi </h5>
  //       {/* <NavBar/> */}
  //     </div>
  //   )
  // }

  /**
   * CONTAINER
   */
  const mapState = (state) => {
    return {
      email: state.user.email
    }
  }

  const mapDispatch = dispatch => ({
    selectedSources: (email) => {
      dispatch(findSelectedSources(email));
      // what other data might we want to fetch on app load?
    },
  });

  export default connect(mapState, mapDispatch)(UserHome)

  /**
   * PROP TYPES
   */
  UserHome.propTypes = {
    email: PropTypes.string
  }

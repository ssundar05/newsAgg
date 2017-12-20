import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findSelectedSources } from '../store'
import {Button, NavItem, Dropdown} from 'react-materialize'

// import NavBar from './navbar'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.selectedSources(this.props.email)
  }

  render() {
    return (
      <div>
        <div className="row">

          <div   className="col s2 pink lighten-3" id="sidebar">
          <div className="row">
          <div className="col s1"> </div>

          <div className="col s10">
          <Dropdown trigger={
		<Button>Politics</Button>
	}>
  <NavItem><img src= 'https://icons.better-idea.org/icon?url=http://www.breitbart.com&size=70..120..200'/> BreitBart   </NavItem>
	<NavItem>two</NavItem>
	<NavItem divider />
	<NavItem>three</NavItem>
</Dropdown>
</div>
            {/* <!-- Grey navigation panel --> */}
            <div className="col s2"> </div>
          </div>
</div>

          <div className="col s11">
            <p> HELLO </p>
            {/* <!-- Teal page content  --> */}
          </div>

        </div>
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
    email: state.user.email,
    created: state.sourcesSelect[1],
    sources: state.sourcesSelect[0]
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

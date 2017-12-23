import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findSelectedSources , setPolitics} from '../store'
import { Button, NavItem, Dropdown } from 'react-materialize'

// import NavBar from './navbar'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.handlePolClick = this.handlePolClick.bind(this)
  }

  componentDidMount() {
    this.props.selectedSources(this.props.email)
  }
  handlePolClick(event){
    event.preventDefault()
    console.log( event.target.dataset.name )
    let pol = {politics: event.target.dataset.name }
  
    this.props.selectPol(pol)
    event.target.name = ''
  }
  render() {
  
    // const polSources = this.props.politicsSources.map(item => {
    //   return <li key = {item.id} name = {item.name} onClick = {this.handlePolClick}>< img name = {item.name} src = {item.imgUrl} /> <p> {item.name} </p> </li>
    // })
    const polis = this.props.politicsSources.map(item => {
      return <li onClick = {this.handlePolClick} key = {item.id} data-name = {item.name} >
      < img data-name = {item.name} name = {item.name} src = {item.imgUrl}  /> <p data-name = {item.name}> {item.name} </p>
      </li>
    })
    return (
      <div>
        <div className="row">

          <div className="col s1.5 grey" id="sidebar">
                <Dropdown  trigger={
                  <Button>Politics</Button>
                }>
            
                {polis}
             
                  {/* <NavItem><img src='https://icons.better-idea.org/icon?url=http://www.breitbart.com&size=70..120..200' /> BreitBart   </NavItem>
                  <NavItem>two</NavItem>
                  <NavItem divider />
                  <NavItem>three</NavItem> */}
                </Dropdown>
              
          </div>
          <div className="col s10.5">
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
    sources: state.sourcesSelect[0],
    politicsSources: state.politics
  }
}

const mapDispatch = dispatch => ({
  selectedSources: (email) => {
    dispatch(findSelectedSources(email))},
  selectPol: (name) => {
    dispatch(setPolitics(name))
  }
    // what other data might we want to fetch on app load?
});

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

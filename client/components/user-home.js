import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findSelectedSources, setPolitics } from '../store'
import { Button, NavItem, Dropdown } from 'react-materialize'

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { polTitle: 'Politics' }
    this.handlePolClick = this.handlePolClick.bind(this)
  }

  componentDidMount() {
    this.props.selectedSources(this.props.email)

  }
  handlePolClick(event) {
    event.preventDefault()
    let pol = {
      politics: event.target.dataset.name,
      userId: this.props.sources.userId
    }
    this.props.selectPol(pol)

    event.target.name = ''
  }
  render() {
    if (!this.props.sources) return <div />
    return (
      <div>
        <div className="row">
          <div className="col s2" >
            <Dropdown trigger={
              <Button>Politics</Button>
            }>

              {this.props.politicsSources.map(item => {
                return <li onClick={this.handlePolClick} key={item.id} data-name={item.name} >
                  < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p>
                </li>
              })}
            </Dropdown>
          </div>
          <div className="col s10">
            <div className="container">
              <div className="row">
                <div className="col s6">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.politics.name || this.props.sources.politics}<i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
              </div></div>
          </div>

        </div></div>


    )

  }

}
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
    dispatch(findSelectedSources(email))
  },
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

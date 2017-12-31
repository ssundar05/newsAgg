import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findSelectedSources, setPolitics } from '../store'
import { Button, NavItem, Dropdown } from 'react-materialize'
import axios from 'axios'

// api key dbf782ddda0147a287a8f3e9e579e1a4
// https://newsapi.org/v2/top-headlines -G \
// -d sources=bbc-news \
// -d apiKey=dbf782ddda0147a287a8f3e9e579e1a4

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClick: '',
      apiKey: 'apiKey=dbf782ddda0147a287a8f3e9e579e1a4',
      polTitle: 'Politics',
      polArticles: {
        default: 'Please Select A Source',
        headlines: []
      },

      polLoad: false
    }
    this.handlePolClick = this.handlePolClick.bind(this)
    // this.fetchPol = this.fetchPol.bind(this)
  }


  componentDidMount() {
    this.props.selectedSources(this.props.email)

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sources !== this.props.sources) {

      // if (!prevProps.sources.politics && this.props.sources.politics === "Politics") {} 
      if (this.props.sources.politics !== 'Politics' && this.state.currentClick === '') {
        console.log(this.props.sources.politics.source)
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.politics.source}&${this.state.apiKey}`).then(head => {
          this.setState({ polArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Politics') {
        console.log(2)
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.politics.source}&${this.state.apiKey}`).then(head => { this.setState({ polArticles: {headlines: head.data.articles }}) }
        )
      }

    }
    console.log(this.state)
  }

  handlePolClick(event) {
    event.preventDefault()
    this.setState({ currentClick: 'Politics' })
    let pol = {
      politics: event.target.dataset.name,
      userId: this.props.sources.userId
    }

    this.props.selectPol(pol)
    event.target.name = ''
  }

  render() {
    if (!this.props.sources) return <div />
    // if(this.state.)

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
                      <span className="card-title grey-text text-darken-4">{this.props.sources.politics.name || this.props.sources.politics}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.polArticles.headlines.map((story, index) => {
                          return <a href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                      {/* <p>{}</p> */}
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

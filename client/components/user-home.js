import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findSelectedSources, setPolitics, setSports, setFinancial, setTechnology, setEntertainment } from '../store'
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
      sportsArticles: {
        default: 'Please Select A Source',
        headlines: []
      },
      financialArticles: {
        default: 'Please Select A Source',
        headlines: []
      },
      technologyArticles: {
        default: 'Please Select A Source',
        headlines: []
      },
      entertainmentArticles: {
        default: 'Please Select A Source',
        headlines: []
      },
    }
    this.handlePolClick = this.handlePolClick.bind(this)
    this.handleSportsClick = this.handleSportsClick.bind(this)
    this.handleTechnologyClick = this.handleTechnologyClick.bind(this)
    this.handleFinancialClick = this.handleFinancialClick.bind(this)
    this.handleEntertainmentClick = this.handleEntertainmentClick.bind(this)
  }


  componentDidMount() {
    
    this.props.selectedSources(this.props.email)
   

  }
  componentDidUpdate(prevProps, prevState) {
  
    if (prevProps.sources !== this.props.sources) {
      if (this.props.sources.politics !== 'Politics' && this.state.currentClick === '') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.politics.source}&${this.state.apiKey}`).then(head => {
          this.setState({ polArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Politics') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.politics.source}&${this.state.apiKey}`).then(head => { this.setState({ polArticles: {headlines: head.data.articles }}) }
        )
      }
      if (this.props.sources.sports !== 'Sports' && this.state.currentClick === '') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.sports.source}&${this.state.apiKey}`).then(head => {
          this.setState({ sportsArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Sports') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.sports.source}&${this.state.apiKey}`).then(head => { this.setState({ sportsArticles: {headlines: head.data.articles }}) }
        )
      }
      if (this.props.sources.technology !== 'Technology' && this.state.currentClick === '') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.technology.source}&${this.state.apiKey}`).then(head => {
          this.setState({ technologyArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Technology') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.technology.source}&${this.state.apiKey}`).then(head => { this.setState({ technologyArticles: {headlines: head.data.articles }}) }
        )
      }
      if (this.props.sources.entertainment !== 'Entertainment' && this.state.currentClick === '') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.entertainment.source}&${this.state.apiKey}`).then(head => {
          this.setState({ entertainmentArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Entertainment') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.entertainment.source}&${this.state.apiKey}`).then(head => { this.setState({ entertainmentArticles: {headlines: head.data.articles }}) }
        )
      }
      if (this.props.sources.entertainment !== 'Financial' && this.state.currentClick === '') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.financial.source}&${this.state.apiKey}`).then(head => {
          this.setState({ financialArticles: {headlines: head.data.articles }})
        })
      }
      if (this.state.currentClick === 'Financial') {
        axios.get(`https://newsapi.org/v2/top-headlines/?${this.props.sources.financial.source}&${this.state.apiKey}`).then(head => { this.setState({ financialArticles: {headlines: head.data.articles }}) }
        )
      }
    }
  
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


  handleSportsClick(event) {
    event.preventDefault()
    this.setState({ currentClick: 'Sports' })
    let sports = {
      sports: event.target.dataset.name,
      userId: this.props.sources.userId
    }
    this.props.selectSports(sports)
    event.target.name = ''
  }

  handleEntertainmentClick(event) {
    event.preventDefault()
    this.setState({ currentClick: 'Entertainment' })
    let entertainment = {
      entertainment: event.target.dataset.name,
      userId: this.props.sources.userId
    }
    this.props.selectEntertainment(entertainment)
    event.target.name = ''
  }
  handleFinancialClick(event) {
    event.preventDefault()
    this.setState({ currentClick: 'Financial' })
    let financial = {
      financial: event.target.dataset.name,
      userId: this.props.sources.userId
    }
    this.props.selectFinancial(financial)
    event.target.name = ''
  }

  handleTechnologyClick(event) {
    event.preventDefault()
    this.setState({ currentClick: 'Technology' })
    let technology = {
      technology: event.target.dataset.name,
      userId: this.props.sources.userId
    }
    this.props.selectTechnology(technology)
    event.target.name = ''
  }
  render() {
    if (!this.props.sources) return <div />

    return (
      <div>
        <div className = 'container' id = 'hello'>
        <div className="row" >
       
          <div className="col s2"  id = 'sidebar' >
          <div className = 'dropSpace'> </div>
            <Dropdown trigger={
              <Button>Politics</Button>
            }>
              {this.props.politicsSources.map(item => {
                return <li onClick={this.handlePolClick} key={item.id} data-name={item.name} >
                 <span> < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p> </span>
                </li>
              })}
            </Dropdown>
            <div className = 'dropSpace'> </div>
            <Dropdown trigger={
              <Button>Sports</Button>
            }>
              {this.props.sportsSources.map(item => {
                return <li onClick={this.handleSportsClick} key={item.id} data-name={item.name} >
                  < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p>
                </li>
              })}
            </Dropdown>
            <div className = 'dropSpace'> </div>
            <Dropdown trigger={
              <Button>Technology</Button>
            }>
              {this.props.technologySources.map(item => {
                return <li onClick={this.handleTechnologyClick} key={item.id} data-name={item.name} >
                  < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p>
                </li>
              })}
            </Dropdown>
            <div className = 'dropSpace'> </div>
            <Dropdown trigger={
              <Button>Financial</Button>
            }>
              {this.props.financialSources.map(item => {
                return <li onClick={this.handleFinancialClick} key={item.id} data-name={item.name} >
                  < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p>
                </li>
              })}
            </Dropdown>
            <div className = 'dropSpace'> </div>
            <Dropdown trigger={
              <Button>Entertainment</Button>
            }>
              {this.props.entertainmentSources.map(item => {
                return <li onClick={this.handleEntertainmentClick} key={item.id} data-name={item.name} >
                  < img data-name={item.name} name={item.name} src={item.imgUrl} /> <p data-name={item.name}> {item.name} </p>
                </li>
              })}
            </Dropdown>
          </div>
          
          <div className="col s12" id = 'toRight'>
            <div className="container">
              <div className="row">
                <div className="col s6">

                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.politics.name || this.props.sources.politics}<i className="material-icons right">more_vert</i></span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.sources.politics.name || this.props.sources.politics}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.polArticles.headlines.map((story, index) => {
                          return <a target="_blank" href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                   
                    </div>
                  </div>

                </div>

                <div className="col s6">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.sports.name || this.props.sources.sports}<i className="material-icons right">more_vert</i></span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.sources.sports.name || this.props.sources.sports}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.sportsArticles.headlines.map((story, index) => {
                          return <a target="_blank" href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s6">

                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.technology.name || this.props.sources.technology}<i className="material-icons right">more_vert</i></span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.sources.technology.name || this.props.sources.technology}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.technologyArticles.headlines.map((story, index) => {
                          return <a target="_blank" href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                   
                    </div>
                  </div>

                </div>

                <div className="col s6">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.financial.name || this.props.sources.financial}<i className="material-icons right">more_vert</i></span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.sources.financial.name || this.props.sources.financial}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.financialArticles.headlines.map((story, index) => {
                          return <a target="_blank" href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className = "col s3">
              </div>
                <div className="col s6">

                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.haworth.com/images/default-source/homepage/haworth-client-space-ash-brokerage-1.jpg?sfvrsn=2" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">{this.props.sources.entertainment.name || this.props.sources.entertainment}<i className="material-icons right">more_vert</i></span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.sources.entertainment.name || this.props.sources.entertainment}<i className="material-icons right">close</i></span>
                      <div className = "collection"> 
                        {this.state.entertainmentArticles.headlines.map((story, index) => {
                          return <a target="_blank" href = {story.url} className = "collection-item" key = {index} > {story.title} </a>
                        })}
                        </div>
                    </div>
                  </div>
                </div>
                <div className = "col s3">
              </div>
              </div>
              </div>
          </div>

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
    politicsSources: state.politics,
    sportsSources: state.sports,
    financialSources: state.financial,
    technologySources: state.technology,
    entertainmentSources: state.entertainment,
  }
}

const mapDispatch = dispatch => ({
  selectedSources: (email) => {
    dispatch(findSelectedSources(email))
  },
  selectPol: (name) => {
    dispatch(setPolitics(name))
  },
  selectSports: (name) => {
    dispatch(setSports(name))
  },
  selectFinancial: (name) => {
    dispatch(setFinancial(name))
  },
  selectEntertainment: (name) => {
    dispatch(setEntertainment(name))
  },
  selectTechnology: (name) => {
    dispatch(setTechnology(name))
  },
  // what other data might we want to fetch on app load?
});

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

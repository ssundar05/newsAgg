import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */


const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div>

      <div id="fullDiv">
        <section className="login-form-container">
          <div className="card-container cCont">
            <div className="card cCard z-depth-5">
              <div className="card-header cHead">
                <p id= "loginTitle">{displayName} Here</p>
                {/* <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Register"><i className="material-icons">person_add</i></a> */}
              </div>
              <div className="card-content ccCont">
                <form  onSubmit={handleSubmit} name={name}>
                  <div className="row">
                    <div className="input-field col l12 m12 s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input placeholder="" id="email" type="text" className="validate" required="required" />
                        <label htmlFor="email">Enter e-mail</label>
                       </div>
                    </div>
                    <div className="row">
                      <div className="input-field col l12 m12 s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input placeholder="" id="password" type="password" className="validate" required="required" />
                          <label htmlFor="password">Password</label>
                       </div>
                      </div>
                      <div className="row">
                      <div className="input-field col l12 m12 s12 center-align">
                        <button type = "submit" className="waves-effect waves-light btn blue-grey darken-1 z-depth-5">{displayName}</button>
                      </div>
                    </div>
               </form>
                    <div className="row">
                      <div className="col l12 m12 s12">
                        <div className="card-footerl">
                          <div className="col l6 m6 s12 no-padding">
                            <input type="checkbox" className="filled-in" id="remember-me" />
                            <label htmlFor="remember-me">Remember Me</label>
                          </div>
                          <div className="col l6 m6 s12">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
              </div>
        </section>
            {/* <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a> */}






          </div>

    </div>
        )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
          name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
          name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
          handleSubmit(evt) {
        evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
          name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

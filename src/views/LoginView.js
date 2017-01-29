/**
 *  Login View
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionsCreators } from 'actions/auth_actions';
import GlispaSvgLogo from 'components/generic/svgIcons/GlispaSvgLogo';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

import classes from 'styles/login.scss';

class LoginView extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object
  }

  // constructor (props) {
  //   super(props);
  // }

  submitLogin = (event) => {
    if (event.type === 'keyup' && event.keyCode !== 13) return;
    let userEmail = ReactDOM.findDOMNode(this.refs.userEmail).value;
    let userPass = ReactDOM.findDOMNode(this.refs.userPassword).value;

    if (!userEmail.length || !userPass.length) return;

    this.props.actions.fetchUserAuth({ username: userEmail, password: userPass }, true);
    this.props.actions.authenticatUser(true);

    ReactDOM.findDOMNode(this.refs.userEmail).value = '';
    ReactDOM.findDOMNode(this.refs.userPassword).value = '';
  }

  componentWillReceiveProps (nextProps) {
    if (!shallowEqual(nextProps, this.props)) {
      nextProps.history.push('/app/performance');
    }
  }

  render () {
    return (
      <div className={classes.loginWrapper}>
        <div className={classes.loginBox}>
          <div className={classes.loginlog}>
            <GlispaSvgLogo width='180' />
          </div>
          <div className={classes.submitForm}>
            <h3 className={classes.loginTitle}>login</h3>
            <span className={classes.inputBox}>
              <svg className={classes.login_icon} height='17' version='1.1' viewBox='0 0 78 78' width='17' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <path d='M1,12c-0.553,0-1,0.447-1,1v52c0,0.553,0.447,1,1,1h76c0.553,0,1-0.447,1-1V13c0-0.553-0.447-1-1-1H1  z M69.816,18L39,40.594L8.184,18H69.816z M72,60H6V23.839l29.452,21.594L39,48.033l3.548-2.601L72,23.839V60z' style={{'fill': '#555555'}} />
              </svg>
              <input type='email'
                className={`${classes.loginInput} form_user`}
                placeholder='user email'
                ref='userEmail' />
            </span>
            <span className={classes.inputBox}>
              <svg className={classes.lock_icon} width='16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enableBackground='new 0 0 1000 1000' xmlSpace='preserve'>
                <g>
                  <path style={{'fill': '#555555'}} d='M107.3,982.5V443.9H212V279.3C212,129.7,331.7,10,481.3,10h37.4C668.3,10,788,129.7,788,279.3v172.1h104.7V990H107.3V982.5z M466.3,705.7l-29.9,224.4h127.2l-29.9-224.4c29.9-15,52.4-44.9,52.4-82.3c0-44.9-37.4-82.3-82.3-82.3c-44.9,0-89.8,37.4-89.8,82.3C414,660.8,436.4,690.8,466.3,705.7z M683.3,294.3c0-104.7-82.3-187-187-187c-104.7,0-187,82.3-187,187v149.6h374V294.3z' />
                </g>
              </svg>
              <input type='password'
                className={`${classes.loginInput} form_pass`}
                placeholder='password'
                ref='userPassword'
                onKeyUp={this.submitLogin} />
            </span>
            <button className={classes.submitLogin} onClick={this.submitLogin}>login to your account</button>
            <div className={classes.forgot}>forgot password</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchUserAuth: state.fetchUserAuth,
  failAuth: state.failAuth,
  userSession: state.userSession,
  nodeEnv: state.nodeEnv,
  router: state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(authActionsCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { browserHistory } from 'react-router';
// import later to control flow to and from forgot password, logged in, or signup
import PropTypes from 'prop-type';

import * as actionCreators from '../../store/actions/index';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pword: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPWordChange = this.onPWordChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPWordChange(e) {
    this.setState({ pword: e.target.value });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.email, this.state.pword);
    }
  }

  render() {
    return (
      <div className="login-form">
        <h3> Login</h3>
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
          onKeyPress={this.handleEnter}
        />
        <input
          placeholder="Password"
          value={this.state.pword}
          onChange={this.onPWordChange}
          onKeyPress={this.handleEnter}
        />
        <button onClick={this.props.onSubmit(this.state.email, this.state.pword)}>Login</button>
      </div>
    );
  }
}

const { func } = PropTypes;

Login.propTypes = {
  onSubmit: func,
};

Login.defaultProps = {
  onSubmit: () => {},
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => dispatch(actionCreators.login(email, password)),
});

export default withRouter(connect(null, mapDispatchToProps)(Login));

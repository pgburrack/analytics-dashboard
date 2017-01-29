import React, { Component } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

export default class Input extends Component {
  static propTypes = {
    inputAttr: React.PropTypes.object,
    checked: React.PropTypes.bool
  };

  static defualtProps = {
    checked: false
  }

  constructor (props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  componentWillReceiveProps (nextProps) {
    if (shallowEqual(nextProps, this.props)) {
      return;
    }

    if (nextProps.checked !== this.state.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
  }

  handleChange = (e) => {
    this.setState({
      checked: e.target.checked
    });
  }

  render () {
    const { checked } = this.state;
    const { inputAttr } = this.props;

    return (
      <input {...inputAttr}
       type='checkbox'
       checked={checked}
       onChange={this.handleChange}/>
    );
  }
}

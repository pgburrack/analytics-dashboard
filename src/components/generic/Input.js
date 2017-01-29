import React, { Component } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

export default class Input extends Component {
  static propTypes = {
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    className: React.PropTypes.string,
    value: React.PropTypes.string,
    callback: React.PropTypes.func,
    timeout: React.PropTypes.number,
    disabled: React.PropTypes.bool
  };

  static defaultProps = {
    timeout: 500,
    value: '',
    callback: () => {},
    disabled: false
  };

  constructor (props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps (nextProps) {
    if (shallowEqual(nextProps, this.props)) {
      return;
    }

    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
        Timer: ''
      });
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
  }

  handleChange = (e) => {
    let inputVal = e.target.value.trim();
    clearTimeout(this.state.Timer);
    this.setState({
      value: inputVal,
      Timer: setTimeout(() => {
        this.props.callback(inputVal);
      }, this.props.timeout)
    });
  }

  render () {
    const { value } = this.state;
    const { type, placeholder, className, disabled } = this.props;

    return (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        disabled={disabled}
        onChange={this.handleChange} />
    );
  }
}

import React, { Component } from 'react';

export default class AutoCompleteListItem extends Component {
  static propTypes = {
    value: React.PropTypes.string,
    handleSelect: React.PropTypes.func
  };

  static defaultProps = {
    value: '',
    handleSelect: () => {}
  };

  // constructor (props) {
  //   super(props);
  // }

  handleClick = () => {
    this.props.handleSelect(this.props.value);
  }

  render () {
    const { value } = this.props;

    return (
      <li onClick={this.handleClick}>
        <a>{value}</a>
      </li>
    );
  }
}

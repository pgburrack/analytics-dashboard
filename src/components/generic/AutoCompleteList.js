import React, { Component } from 'react';
import AutoCompleteListItem from 'components/generic/AutoCompleteListItem';

export default class AutoCompleteList extends Component {
  static propTypes = {
    list: React.PropTypes.array,
    className: React.PropTypes.string,
    handleSelect: React.PropTypes.func
  };

  static defaultProps = {
    list: []
  };

  render () {
    const { className, list, handleSelect } = this.props;

    return (
      <ul className={`${className}`}>
        {
          list.map((item, index) => {
            return (
              <AutoCompleteListItem
                key={index}
                handleSelect={handleSelect}
                value={item} />);
          })
        }
      </ul>
    );
  }
}

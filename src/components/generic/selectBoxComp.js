'use strict';

import React, {Component} from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import ArrowDownSvgIcon from 'components/generic/svgIcons/ArrowDownSvgIcon';
import ArrowUpSvgIcon from 'components/generic/svgIcons/ArrowUpSvgIcon';
import CloseSvgIcon from 'components/generic/svgIcons/CloseSvgIcon';

export default class SelectBoxComp extends Component {
  static propTypes = {
    placeHolder: React.PropTypes.string,
    selectList: React.PropTypes.array,
    optionValue: React.PropTypes.string,
    optionView: React.PropTypes.string,
    selectedView: React.PropTypes.string,
    triggerSelect: React.PropTypes.func,
    classFile: React.PropTypes.string,
    disabled: React.PropTypes.bool
  };

  static defaultProps = {
    placeHolder: 'choose option',
    selectList: [],
    optionValue: '',
    optionView: '',
    selectedView: '',
    classes: {},
    classFile: 'SelectBoxCompDef',
    disabled: false
  };

  constructor (props) {
    super(props);
    this.state = {
      selectedViewState: props.selectedView.length ? props.selectedView : props.placeHolder,
      dropdownStatus: false,
      classes: require(`./../../styles/generic/${props.classFile}.scss`) || {},
      listHtml: ''
    };
  }

  componentDidMount () {
    window.addEventListener('click', this.keyupHandler);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.keyupHandler);
  }

  componentWillMount () {
    if (this.props.selectList && this.props.selectList.length > 0) {
      this.setState({
        listHtml: this.setListHtml(this.props.selectList)
      });
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!shallowEqual(nextProps.selectedView, this.props.selectedView)) {
      this.setState({
        selectedViewState: nextProps.selectedView
      });
    }

    if (shallowEqual(nextProps.selectList, this.props.selectList)) return false;
    this.setState({
      listHtml: this.setListHtml(nextProps.selectList)
    });
  }

  keyupHandler = (event) => {
    if (this.state.dropdownStatus) {
      this.setState({
        dropdownStatus: false
      });
    }
  }

  setListHtml = (list) => {
    const { optionView } = this.props;
    const { classes } = this.state;
    return list.map((item, index) => {
      let optionViewFinal = optionView.length ? item[optionView] : item;
      return (
        <li className={classes['select-li']} key={index} onClick={this.selectOptionHandler.bind(null, index)}>
          <a className={classes['select-anc']} href='#'>{optionViewFinal}</a>
        </li>
      );
    });
  }

  openDropDownHandler = (e) => {
    e.stopPropagation();
    if (e.target.id === 'closeIcon') return false;
    this.setState({
      dropdownStatus: !this.state.dropdownStatus
    });
  }

  clearValueHandler = (e) => {
    if (this.state.selectedViewState === this.props.placeHolder) return false;

    this.setState({
      selectedViewState: this.props.placeHolder
    });
    this.props.triggerSelect(-1);
  }

  selectOptionHandler = (index, e) => {
    e.stopPropagation();
    let viewLabel = this.props.optionView.length ? this.props.selectList[index][this.props.optionView] : this.props.selectList[index];
    this.setState({
      selectedViewState: viewLabel,
      dropdownStatus: false
    });
    this.props.triggerSelect(index);
  };

  render () {
    const { selectedViewState, dropdownStatus, classes, listHtml } = this.state;
    const { placeHolder, disabled } = this.props;

    let closeIcon = '';
    if (selectedViewState !== placeHolder) {
      closeIcon = <CloseSvgIcon width='10' color='#fff' id='closeIcon' />;
    }

    let dropDownClass = dropdownStatus ? 'toggle-list' : '';
    let svgArrow = dropdownStatus ? <ArrowUpSvgIcon width='15' color='#FFF' /> : <ArrowDownSvgIcon width='15' color='#FFF' />;

    return (
      <div className={classes['main-box']}>
        <a className={classes['trigger-btn']} onClick={!disabled ? this.openDropDownHandler : () => {}}>
          <span className={classes['reset-select']} onClick={!disabled ? this.clearValueHandler : () => {}}>{closeIcon}</span>
          <span className={classes['select-title']}>{selectedViewState}</span>
          <span className={classes['list-arrow']}>{svgArrow}</span>
        </a>
        <div className={`${classes['drop-container']} ${classes[dropDownClass]}`}>
          <ul className={classes['drop-ul']}>
          {listHtml}
          </ul>
        </div>
      </div>
    );
  }
}


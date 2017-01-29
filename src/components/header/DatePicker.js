'use strict';

import React, {Component} from 'react';
import classes from 'styles/DatePicker.scss';
import { datePickerArr } from 'utils/constants';
import RangeDayPicker from 'components/generic/DayPickerComp';
import moment from 'moment';

export default class DatePicker extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    rangePickerBtn: React.PropTypes.string,
    dateRange: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      displayCalendar: false
    };
  }

  SetDatePickerBtn = (index) => {
    var picker = datePickerArr[index];
    if (picker === this.props.rangePickerBtn && picker !== 'custom') return;

    this.props.actions.setRangePickerBtn(picker);
    this.setState({ displayCalendar: Boolean(picker === 'custom') });

    if (picker === 'custom') return;
    // clear renge picker state
    if (this.refs.rangeDayPicker.state.from !== null) {
      this.refs.rangeDayPicker.setState({
        from: null,
        to: null
      });
    }
    let end = moment().unix();
    let type = picker !== 'month' ? 'days' : picker;
    let period = picker !== 'week' ? 1 : 8;
    let start = moment().subtract(period, type).unix();
    this.props.actions.setDateRange({ start: start, end: end });
  }

  // close range day picker box func
  eventCloseDatePicker = () => {
    this.setState({ displayCalendar: false });
  }

  render () {
    const { rangePickerBtn, actions, dateRange } = this.props;
    const { displayCalendar } = this.state;

    let datePickerBtnHtml = datePickerArr.map((btn, index) => {
      let activeDate = rangePickerBtn === btn ? classes['active-date'] : '';
      return (
        <button className={`${classes['date-btn']} ${activeDate}`} onClick={this.SetDatePickerBtn.bind(this, index)} key={btn + '_' + index}>{btn}</button>
      );
    });
    let showPicker = displayCalendar ? 'open' : '';

    return (
      <div className={classes['date-picker-container']}>
        <div className={classes['group-btn-container']}>
        {datePickerBtnHtml}
        </div>
        <RangeDayPicker showPicker={showPicker}
          ref='rangeDayPicker'
          eventCloseDatePicker={this.eventCloseDatePicker}
          actions={actions}
          displayCalendar={displayCalendar} />
        <div className={classes['string-date']}>
          <span className={classes['date']}>{moment.unix(dateRange.start).format('DD MMM YY')}</span>
          to
          <span className={classes['date']}>{moment.unix(dateRange.end).format('DD MMM YY')}</span>
        </div>
      </div>
    );
  }
}

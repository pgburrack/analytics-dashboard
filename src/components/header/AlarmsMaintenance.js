import React, { Component } from 'react';
import InfoSvgIcon from 'components/generic/svgIcons/InfoSvgIcon';
import SwitchBtnComp from 'components/generic/SwitchBtnComp';
import css from 'styles/header/AlarmsMaintenance.scss';

export default class AlarmsMaintenance extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    maintenanceMode: React.PropTypes.bool
  };

  constructor (props) {
    super(props);
    this.state = {
      maintenanceOn: this.props.maintenanceMode
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.maintenanceMode !== this.state.maintenanceOn) {
      return this.setState({maintenanceOn: nextProps.maintenanceMode});
    }
  }

  handleChange = (e) => {
    this.setState({
      maintenanceOn: !this.state.maintenanceOn
    });

    this.props.actions.openModal(true);
  };

  render () {
    const {
      maintenanceOn
    } = this.state;

    return (
      <div className={`${css['alarmsMaintenance']} flex always align-items-center`}>
        <label className='flex align-items-center'>
          <span>Maintenance mode is</span>
          <div className={css['switch-btn-wrapper']}>
            <SwitchBtnComp activeState={maintenanceOn} onChange={this.handleChange} />
          </div>
        </label>
        <span className={`${css['info']} tooltip top right pointer`}>
          <InfoSvgIcon color='#fff' width='10' />
          <span className={`tooltip-text ${css['tooltip-text']}`}>When ON - no alarms will be active until this mode is switched off.</span>
        </span>
      </div>
    );
  }
}

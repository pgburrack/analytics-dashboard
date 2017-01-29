import React, { Component } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOnUpdate } from 'decorators';
import css from 'styles/AlarmsView.scss';


/**
 * actions
 */
import { actionCreators } from 'actions/core_layout';
import { alarmActionsCreators } from 'actions/alarms_actions';

/**
 * components
 */
import ContainerHeader from 'containers/ContainerHeader';

class AlarmsView extends Component {
  static propTypes = {
    actions: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps (nextProps) {

  }

  componentDidMount () {

  }

  render () {
    const {
      actions
    } = this.props;

    return (
      <div>
        <ContainerHeader actions={actions} headerTitle='Alarms' SvgIcon={svgComp}>
          <AlarmsMaintenance actions={actions} maintenanceMode={maintenanceStatus} />
        </ContainerHeader>

        <main>
            Main area
        </main>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const fetchDecorator = fetchOnUpdate([], (params, actions) => {

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, actionCreators, alarmActionsCreators), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(fetchDecorator(AlarmsView));

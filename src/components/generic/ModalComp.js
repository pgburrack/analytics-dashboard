import React, { Component } from 'react';
import css from 'styles/generic/Modal.scss';

export default class ModalComp extends Component {
  static propTypes = {
    children: React.PropTypes.element,
    activeModal: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    backgroundColor: React.PropTypes.string,
    contentClassName: React.PropTypes.string
  }

  static defaultProps = {
    onClick: () => {}
  }
  constructor (props) {
    super(props);
    this.state = {
      isActive: this.props.activeModal ? css['is-active'] : ''
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.activeModal === this.props.activeModal) return false;
    this.setState({
      isActive: nextProps.activeModal ? css['is-active'] : ''
    });
  }

  componentDidMount () {
    window.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event) => {
    if (this.props.activeModal && event.keyCode === 27) {
      this.props.onClick();
    }
  }

  handleClick = (event) => {
    this.props.onClick();
  }

  render () {
    const { children, onClick, backgroundColor, contentClassName } = this.props;
    const { isActive } = this.state;

    return (
      <div className={`${css['modal']} ${isActive}`} onClick={this.handleClick}>
        <div style={{backgroundColor: backgroundColor}} className={css['modal-background']}></div>
        <div className={css['modal-container']} onClick={(event) => { event.stopPropagation(); }}>
          <div className={contentClassName}>
            {children}
          </div>
        </div>
        <button className={css['modal-close']} onClick={onClick}></button>
      </div>
    );
  }
}

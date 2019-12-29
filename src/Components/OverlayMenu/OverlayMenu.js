import React, { Component } from 'react';
import './OverlayMenu.css';

class OverlayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  displayMenu(state) {
    this.setState({ showMenu: state });
  }
  render() {
    return (
      <div>
        <button className="toggle-menu-btn" onClick={() => this.displayMenu(true)}>
          HEY
        </button>
        { this.state.showMenu ?
        <div className="overlay-menu">
          <a href="#" onClick={() => this.displayMenu(false)}>
            &times;
          </a>
          <div className="overlay-menu-content">
            <a href="#">U.K</a>
            <a href="#">GERMANY</a>
          </div>
        </div>
      : ""}
      </div>
    );
  }
}

export default OverlayMenu;

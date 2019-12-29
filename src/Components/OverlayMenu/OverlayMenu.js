import React, { Component } from 'react';
import './OverlayMenu.css';

let flags = [
  'ar', 'au', 'at', 'be', 'br', 'bg', 'ca', 'cn', 'co', 'cu', 'cz', 'eg', 'fr',
  'de', 'gr', 'hk', 'hu', 'in', 'id', 'ie', 'il', 'it', 'jp', 'lv', 'lt', 'my',
  'mx', 'ma', 'nl', 'nz', 'ng', 'no', 'ph', 'pl', 'ro', 'ru', 'sa', 'rs', 'sg',
  'sk', 'si', 'za', 'kr', 'se', 'ch', 'tw', 'th', 'tr', 'ae', 'ua', 'gb', 'us',
  've'
];

class OverlayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
    }
  }

  getFlagImage(flag) {
    return 'https://www.countryflags.io/' + flag + '/shiny/64.png';
  }

  displayMenu(state) {
    this.setState({ showMenu: state });
  }

  handleFlagClick(flag) {
    let url = 'https://newsapi.org/v2/top-headlines?country=' + flag +
              '&apiKey=77e9030d67f34b2e918af2623154e668';
    // somehow pass this URL to ArticleList.js
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
            <div className="sub-menu countries-menu">
              <h1 className="countries-menu-title menu-title">Countries</h1>
                <div className="flag-list-div">
                  {flags.map((flag, index) =>
                    <div className="individual-flag" onClick={() => this.handleFlagClick()}>
                      <img alt="flag" src={this.getFlagImage(flag)} />
                    </div>
                  )}
                </div>
            </div>
            <div className="sub-menu categories-menu">
              <h1 className="categories-menu-title menu-title">Categories</h1>
            </div>
          </div>
        </div>
      : ""}
      </div>
    );
  }
}

export default OverlayMenu;

import React, { Component, createContext } from 'react';

const AppContext = createContext();

class AppProvider extends Component {
  state = {
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=77e9030d67f34b2e918af2623154e668',
  }
  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          changeUrl: url => this.setState({ url: url }),
        }}
      >
        { children }
    </AppContext.Provider>
  );
  }
}

export default AppProvider;

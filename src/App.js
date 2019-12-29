import React from 'react';
import './App.css';
import ArticleList from './Components/ArticleList/ArticleList';
import Title from './Components/Title/Title';
import OverlayMenu from './Components/OverlayMenu/OverlayMenu';

function App() {
  return (
    <div className="App">
      <Title />
      <OverlayMenu />
      <ArticleList />
    </div>
  );
}

export default App;

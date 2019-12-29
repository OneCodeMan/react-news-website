import React from 'react';
import './App.css';
import ArticleList from './Components/ArticleList/ArticleList';
import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <ArticleList />
    </div>
  );
}

export default App;

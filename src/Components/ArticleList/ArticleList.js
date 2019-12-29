import React, { Component } from 'react';
import Article from '../../Components/Article/Article';
import './ArticleList.css';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  getArticles(url) {
    fetch(url)
    .then( response => response.json())
    .then(

      (result) => {
        this.setState({
          isLoaded: true,
          articles: result.articles
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  componentDidMount() {
    this.getArticles("https://newsapi.org/v2/top-headlines?country=us&apiKey=77e9030d67f34b2e918af2623154e668");
  }

  render() {
    const {error, isLoaded, articles} = this.state;

    if (error) {
      return <div>Error in Loading</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return(
        <div className="article-list-div">
          {articles.map((article, i) => (
            article.author ?
            <Article article={article} key={i}/> : null
          ))}
        </div>
      )
    }
  }
}

export default ArticleList;

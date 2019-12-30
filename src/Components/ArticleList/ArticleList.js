import React, { Component } from 'react';
import Article from '../../Components/Article/Article';
import './ArticleList.css';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const EmptyView = () =>
  <div>
    <img src="https://cataas.com/cat/cute/says/WOAH%20SUCH%20EMPTY" alt="cat"/>
  </div>

const flags = [
  'ar', 'au', 'at', 'be', 'br', 'bg', 'ca', 'cn', 'co', 'cu', 'cz', 'eg', 'fr',
  'de', 'gr', 'hk', 'hu', 'in', 'id', 'ie', 'il', 'it', 'jp', 'lv', 'lt', 'my',
  'mx', 'ma', 'nl', 'nz', 'ng', 'no', 'ph', 'pl', 'ro', 'ru', 'sa', 'rs', 'sg',
  'sk', 'si', 'za', 'kr', 'se', 'ch', 'tw', 'th', 'tr', 'ae', 'ua', 'gb', 'us',
  've'
];

const subCategories = ['business', 'entertainment', 'health', 'science', 'sports',
                        'technology'];

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      query: ''
    };
  }

  getFlagImage(flag) {
    return 'https://www.countryflags.io/' + flag + '/shiny/32.png';
  }

  handleFlagClick(flag) {
    let url = 'https://newsapi.org/v2/top-headlines?country=' + flag +
              '&apiKey=77e9030d67f34b2e918af2623154e668';
    this.getArticles(url);
  }

  handleSubCategoryClick(category) {
    let url = 'https://newsapi.org/v2/top-headlines?category=' + category +
              '&apiKey=77e9030d67f34b2e918af2623154e668';
    this.getArticles(url);
  }

  handleQueryChange(e) {
    this.setState({ query: e.target.value });
  }

  handleQuerySearch(query) {
    let url = 'https://newsapi.org/v2/top-headlines?q=' + query +
              '&apiKey=77e9030d67f34b2e918af2623154e668';
    this.getArticles(url);
    this.setState({ query: '' });
  }

  getArticles(url) {
    this.setState({
      isLoaded: false
    });

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

  componentDidMount() {;
    this.getArticles('https://newsapi.org/v2/top-headlines?country=us&apiKey=77e9030d67f34b2e918af2623154e668');
  }

  render() {
    const {error, isLoaded, articles} = this.state;

    if (error) {
      return <div>Error in Loading</div>
    } else if (!isLoaded) {
      return <LoadingSpinner />
    } else {
      return(
        <div>
          <div className="search-wrap">
            <div className="search-bar">
              <input type="text"
               className="search-input"
               value={this.state.query}
               onChange={this.handleQueryChange.bind(this)}
              />
            <button type="submit" className="search-button"
              onClick={() => this.handleQuerySearch(this.state.query)}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="flags-list-div">
            {flags.map((flag, index) =>
              <div key={index} className="individual-flag" onClick={() => this.handleFlagClick(flag)}>
                <img alt={flag} src={this.getFlagImage(flag)} />
              </div>
            )}
          </div>
          <div className="subcategory-list-div">
            {subCategories.map((subCategory, index) =>
              <div key={index} className="individual-subcategory"
                   onClick={() => this.handleSubCategoryClick(subCategory)}>
                <button className="subcategory-pill">{subCategory}</button>
              </div>
            )}
          </div>
          {
            articles.length === 1 ?
            <h4>{articles.length} RESULT FOUND</h4> :
            <h4>{articles.length} RESULTS FOUND</h4>
          }
          {
            articles.length ? <div className="article-list-div">
              {articles.map((article, i) => (
                article.author ?
                <Article article={article} key={i}/> : null
              ))}
            </div> : <EmptyView />
          }
        </div>
      )
    }
  }
}

export default ArticleList;

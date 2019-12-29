import React, { useCallback } from 'react';
import './Article.css';

const MoreLink = ({ url }) =>
  <a href={url} className="more-link">More</a>

const Article = ({article}) => {
  const handleClick = useCallback(url => {
    let win = window.open(url, '_blank');
    win.focus();
  });

  function truncateContent(content) {
    let indexToTruncateFrom = content.lastIndexOf('[');
    return content.substring(0, indexToTruncateFrom);
  }

  return (
    <div className="article-div">
      <img alt={article.title} src={article.urlToImage}
           className="link-point image"
           onClick={() => handleClick(article.url)}
      />
      <h1 className="link-point title" onClick={() => handleClick(article.url)}>
        {article.title}
      </h1>
      <p className="description">{article.description}</p>
      <button class="show-more-button">MORE</button>
      {article.content ?
        <p className="content">{truncateContent(article.content)}
          <MoreLink url={article.url} />
        </p>
      : ''}
    </div>
  );
}

export default Article;

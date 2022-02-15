import React, { useState } from "react";
import "./Content.css";

function Content(props) {
  const { handleOnClick, quoteData, color } = props;

  const handleNewQuote = () => {
    handleOnClick();
  };

  let root = document.querySelector(":root");
  root.style.setProperty("--primary-color", color);

  return (
    <div className="App">
      <div className="main-content" id="quote-box">
        <h1 className="quote" id="text">
          <span className="quote-icon">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          {quoteData && quoteData.quote}
        </h1>
        <p className="author" id="author">
          - {quoteData && quoteData.author}
        </p>
        <div className="quote-footer">
          <div className="social-icons">
            <a
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%20does%20not%20matter%20how%20slowly%20you%20go%20as%20long%20as%20you%20do%20not%20stop.%22%20Confucius"
              id="tweet-quote"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DGrandma%2BMoses%26content%3DLife%2Bis%2Bwhat%2Bwe%2Bmake%2Bit%252C%2Balways%2Bhas%2Bbeen%252C%2Balways%2Bwill%2Bbe.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
              id="tumblr-quote"
              target="_blank"
            >
              <i className="fa-brands fa-tumblr"></i>
            </a>
          </div>
          <div className="btn">
            <button id="new-quote" onClick={handleNewQuote}>
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

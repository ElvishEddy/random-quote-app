import { useEffect, useState } from "react";
import Content from "./components/Content";

const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
  "#ecb8d2",
];

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quoteData, setQuoteData] = useState({
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  });
  const [color, setColor] = useState("#ecb8d2;");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setQuotes(result.quotes);
      });
  }, []);

  const getRandomQuote = () => {
    let quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];
    return quoteRandom;
  };

  const getRandomColors = () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const handleOnClick = () => {
    setQuoteData(getRandomQuote());
    setColor(getRandomColors());
  };

  return (
    <>
      <Content
        handleOnClick={handleOnClick}
        quoteData={quoteData}
        color={color}
      />
    </>
  );
}

export default App;

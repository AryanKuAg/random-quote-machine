import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IconButton from "./IconButton";
import Twitter from "./assets/twitter.png";
import Tumblr from "./assets/tumblr.png";

function QuoteBox() {
  const [quoteData, setQuoteData] = useState({ q: "", a: "" });

  useEffect(() => {
    fetchAndSetQuote();
  }, []);

  async function fetchAndSetQuote() {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      if (response.statusText === "OK") {
        setQuoteData({ q: data.content, a: data.author });
      } else {
      }
    } catch (e) {
      console.log("Its an error");
    }
  }

  return (
    <div id="quote-box" className="mx-auto w-48">
      <p id="text">{quoteData.q}</p>
      <p id="author">{quoteData.a}</p>
      <IconButton icon={Twitter} />
      <IconButton icon={Tumblr} />
      <Link to="twitter.com/intent/tweet" id="tweet-quote">
        Tweet
      </Link>
      <Link to="tumblr.com/intent/tweet" id="tumblr-quote">
        Tumblr
      </Link>
      <button id="new-quote" onClick={fetchAndSetQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;

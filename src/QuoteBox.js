import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import randomColor from "randomcolor";
import axios from "axios";
import IconButton from "./IconButton";
import Twitter from "./assets/twitter.png";
import Tumblr from "./assets/tumblr.png";

function changeBodyBackground(color) {
  const body = document.querySelector("body");
  if (body) {
    body.style.backgroundColor = color;
  }
}

function QuoteBox() {
  const [quoteData, setQuoteData] = useState({ q: "", a: "" });
  let color = randomColor();
  changeBodyBackground(color);

  useEffect(() => {
    fetchAndSetQuote();
  }, []);

  async function fetchAndSetQuote() {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      if (response.statusText === "OK") {
        setQuoteData({ q: data.content, a: data.author });
      }
    } catch (e) {
      console.log("Its an error");
    }
  }

  return (
    <div
      id="quote-box"
      className="mx-auto rounded-md p-10"
      style={{ width: "550px", backgroundColor: "white" }}
    >
      <blockquote id="text" style={{ color: color }} className="text-4xl">
        {quoteData.q}
      </blockquote>
      <p id="author" style={{ color: color }} className="my-4 text-xl">
        - {quoteData.a}
      </p>
      <IconButton icon={Twitter} backgroundColor={color} />
      <IconButton icon={Tumblr} backgroundColor={color} />
      {/* <Link to="twitter.com/intent/tweet" id="tweet-quote">
        Tweet
      </Link>
      <Link to="tumblr.com/intent/tweet" id="tumblr-quote">
        Tumblr
      </Link> */}
      <button
        id="new-quote"
        className="p-4 rounded-md font-bold text-white"
        onClick={fetchAndSetQuote}
        style={{ backgroundColor: color }}
      >
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;

import { useEffect, useState } from "react";
import { TwitterShareButton, TumblrShareButton } from "react-share";

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
      style={{ maxWidth: "550px", backgroundColor: "white" }}
    >
      <blockquote
        id="text"
        style={{ color: color }}
        className="text-4xl relative"
      >
        <span className="text-6xl absolute">&ldquo;</span> &nbsp; &nbsp;{" "}
        {quoteData.q}
      </blockquote>
      <p
        id="author"
        style={{ color: color, textAlign: "end" }}
        className="my-8 text-xl"
      >
        - {quoteData.a}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <TwitterShareButton
            url={window.location.href}
            title={quoteData.q + " - " + quoteData.a}
            via={"alemantrix"}
          >
            <IconButton icon={Twitter} backgroundColor={color} />
          </TwitterShareButton>
          <TumblrShareButton
            url={window.location.href}
            title={quoteData.q + " - " + quoteData.a}
          >
            <IconButton icon={Tumblr} backgroundColor={color} />
          </TumblrShareButton>
        </div>
        <button
          id="new-quote"
          className="p-4 rounded-md font-bold text-white"
          onClick={fetchAndSetQuote}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;

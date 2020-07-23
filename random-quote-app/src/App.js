import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://zenquotes.io/api/random";
    axios({
      method: "post",
      url: PROXY_URL + URL, 
      data: {
        KEY: "VALUE",
      },
    })
      .then((response) => {
        console.log(response);
        setQuote(response.data[0].q);
        setAuthor(response.data[0].a);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchQuote();
  }, [])

  return (
    <div className="App">
      <div className="quote-window flex items-center justify-center h-screen w-screen">
        <div
          id="quote-box"
          className="bg-blue-200 border border-black rounded p-6 m-20 container"
        >
          <div id="text" className="italic text-3xl">
            {quote}
          </div>
          <div id="author" className="text-lg">
            -{author}
          </div>
          <div class="row flex flex-wrap justify-center items-center mt-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              id="new-quote"
              onClick={() => fetchQuote()}
            >
              New Quote
            </button>
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?${quote}`}
              data-size="large"
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

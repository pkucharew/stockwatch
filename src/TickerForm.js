import { useState } from "react";
import WatchList from "./WatchList";

const TickerForm = () => {
  const [stockList, setStockList] = useState([]);
  const [stockSymbol, setStockSymbol] = useState([]);

  async function requestStock(stockSymbol) {
    const res = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${stockSymbol}/prev?adjusted=true&apiKey=7ES7YWxlLYkdRtQL1BdAp8jW5CFmbnT_`
    );

    const json = await res.json();

    if (json.results) {
      const newStockObj = json.results[0];
      setStockList([...stockList, newStockObj]);
    } else {
      // We would want validation
      // And better error messages for the end user
      alert("Invalid Ticker Symbol");
    }
  }

  handleSubmit = (stockSymbol) => {
    requestStock(stockSymbol);
  };

  return (
    <div className="Form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(stockSymbol);
        }}
      >
        <label htmlFor="symbol">Add a ticker to the Watchlist</label>
        <div className="input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onChange={(e) => setStockSymbol(e.target.value)}
            placeholder="Enter Symbol"
            id="symbol"
          />
          <button>Add</button>
        </div>
      </form>

      <WatchList stockList={stockList} />
    </div>
  );
};

export default TickerForm;

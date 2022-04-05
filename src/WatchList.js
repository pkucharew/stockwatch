import Ticker from "./Ticker";

const WatchList = ({ stockList }) => {
  return (
    <div className="Watchlist">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Close</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((stock) => {
            return <Ticker stock={stock} key={stock.T} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;

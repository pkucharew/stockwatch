import Clock from "./Clock";
import TickerForm from "./TickerForm";

const App = () => {
  return (
    <div>
      <header>
        <h1>StockWatch</h1>
        <Clock />
      </header>
      <main className="App">
        <TickerForm />
      </main>
    </div>
  );
};

export default App;

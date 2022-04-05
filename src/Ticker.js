const Ticker = ({ stock }) => {
  return (
    <tr className="Ticker">
      <td>
        <a href="#">{stock.T}</a>
      </td>
      <td>{stock.vw}</td>
      <td>{stock.o}</td>
      <td>{stock.c}</td>
    </tr>
  );
};

export default Ticker;

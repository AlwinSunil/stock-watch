import "./Home.scss";

function Home() {
  const stocks = [
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      priceinst: "774.39 USD",
      growth: "+20.75",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc Class A",
      priceinst: "2,844.30 USD",
      growth: "+19.98",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      priceinst: "299.35 USD",
      growth: "+3.20",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc",
      priceinst: "146.92 USD",
      growth: "+25.71",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      priceinst: "774.39 USD",
      growth: "+20.75",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      priceinst: "774.39 USD",
      growth: "+20.75",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc Class A",
      priceinst: "2,844.30 USD",
      growth: "+19.98",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      priceinst: "299.35 USD",
      growth: "+3.20",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc",
      priceinst: "146.92 USD",
      growth: "+25.71",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      priceinst: "774.39 USD",
      growth: "+20.75",
    },
  ];

  return (
    <div className="home">
      <div className="stocks">
        {stocks.map((stock) => (
          <div
            className="stock"
            key={Math.random().toString(36).substring(2, 7)}
          >
            <div className="stock__details">
              <p className="stock__symbol">{stock.symbol}</p>
              <p className="stock__name">{stock.name}</p>
            </div>
            <div className="stock__price">
              <p className="stock__price-inst">{stock.priceinst}</p>
              <p className="stock__price-grow">{stock.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

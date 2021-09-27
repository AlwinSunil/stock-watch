import { useHistory } from "react-router-dom";
import "./Search.scss";


function SearchBar() {
    const history = useHistory();

    const stocks = [{
        symbol: 'TSLA',
        name: 'Tesla Inc',
        priceinst: '774.39 USD',
        growth: '+20.75'
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet Inc Class A',
        priceinst: '2,844.30 USD',
        growth: '+19.98'
    }, {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        priceinst: '299.35 USD',
        growth: '+3.20'
    }, {
        symbol: 'AAPL',
        name: 'Apple Inc',
        priceinst: '146.92 USD',
        growth: '+25.71'
    }, {
        symbol: 'TSLA',
        name: 'Tesla Inc',
        priceinst: '774.39 USD',
        growth: '+20.75'
    },
    {
        symbol: 'TSLA',
        name: 'Tesla Inc',
        priceinst: '774.39 USD',
        growth: '+20.75'
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet Inc Class A',
        priceinst: '2,844.30 USD',
        growth: '+19.98'
    }, {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        priceinst: '299.35 USD',
        growth: '+3.20'
    }, {
        symbol: 'AAPL',
        name: 'Apple Inc',
        priceinst: '146.92 USD',
        growth: '+25.71'
    }, {
        symbol: 'TSLA',
        name: 'Tesla Inc',
        priceinst: '774.39 USD',
        growth: '+20.75'
    }]

    return (
        <div className="search">
            <div className="searchbar__header">
                <div className="searchbar__holder">
                    <div className="btn navigation__back" onClick={() => history.goBack()}>
                        <img src="/assets/icons/back.svg" alt="" />
                    </div>
                    <div className="searchbar">
                        <img src="/assets/icons/search.svg" alt="" />
                        <input type="text" name="search" id="" placeholder="Search for stocks here"></input>
                    </div>
                </div>
            </div>
            <div className="search__results">
                {stocks.map((stock) => (
                    <div className="search__result">
                        <div className="stock__details">
                            <p className="stock__symbol">{stock.symbol}</p>
                            <p className="stock__name">{stock.name}</p>
                        </div>
                        <div className="stock__price">
                            <p className="stock__price-inst">{stock.priceinst}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SearchBar

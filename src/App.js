import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CurrencyApiPlugin from './components/currency-converter/currency-api-plugin';
import CurrencyDataXEPlugin from './components/currency-converter/currency-data-xe';
import FixerPlugin from './components/currency-converter/fixer-plugin';
import Chart from './components/chart';

function App() {
  
  return (
    <div className='App'>
      <h1>Currency Converter</h1>
      <nav>
        <ul>
          <li>
            <Link to="/currencyapiplugin">currencyapi.com Plugin</Link>
          </li>
          <li>
            <Link to="/currencydataxeplugin">currencydata.xe.com Plugin</Link>
          </li>
          <li>
            <Link to="/fixerplugin">Fixer.io Plugin</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={`/currencyapiplugin`} element={<CurrencyApiPlugin />} />
        <Route path={`/currencydataxeplugin`} element={<CurrencyDataXEPlugin />} />
        <Route path={`/fixerplugin`} element={<FixerPlugin />} />
        <Route path={`/chart`} element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;

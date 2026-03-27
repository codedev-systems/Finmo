import './App.css';
import JurosSimples from './JurosSimples';
import JurosCompostos from './JurosCompostos';
import CDB from './CDB';
import LCI from './LCI';
import Header from './components/Header';
import Menu from './components/Menu';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />

        <Routes>
          <Route path="/Finmo/" element={<JurosSimples />} />
          <Route path="/Finmo/juros-compostos" element={<JurosCompostos />} />
          <Route path="/Finmo/cdb" element={<CDB />} />
          <Route path="/Finmo/lci-lca" element={<LCI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
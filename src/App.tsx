import { Routes, Route } from 'react-router-dom';
import BridgeLoansPage from './pages/BridgeLoansPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BridgeLoansPage />} />
      <Route path="/bridge-loans" element={<BridgeLoansPage />} />
    </Routes>
  );
}

export default App;

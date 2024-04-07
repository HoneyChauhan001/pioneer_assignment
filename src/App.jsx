import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import PopulationData from "./pages/PopulationData";
import CryptoCurrencyPrices from "./pages/CryptoCurrencyPrices";

function App() {

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/population-data" element={<PopulationData />} />
        <Route path="/crypto-prices" element={<CryptoCurrencyPrices />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </RootLayout>
  )
}

export default App

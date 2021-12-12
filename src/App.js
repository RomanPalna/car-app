import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Header />;
      <Routes>
        <Route path="/buy" element={<div>Заглушка Buy</div>} />
        <Route path="/sell" element={<div>Заглушка sell</div>} />
        <Route path="/loan" element={<div>Заглушка Loan</div>} />
        <Route path="/contacts" element={<div>Заглушка Contacts</div>} />

        <Route element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

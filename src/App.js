import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header";
import Loan from "./components/Loan";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/buy" element={<div>Заглушка Buy</div>} />
        <Route path="/sell" element={<div>Заглушка sell</div>} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/contacts" element={<div>Заглушка Contacts</div>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
<Footer/>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./components/AddExpense/AddExpense";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;

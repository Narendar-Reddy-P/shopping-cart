import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Collections from "./Pages/Collections";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import AppNav from "./Components/AppNav";

export default function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="collections" element={<Collections />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

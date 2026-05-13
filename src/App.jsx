import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Collections from "./Pages/Collections";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import AppNav from "./Components/AppNav";
import "./index.css";
import WoodenToys from "./Pages/WoodenToys";
import Learning from "./Pages/Learning";
import Plushies from "./Pages/Plushies";
import Vehicles from "./Pages/Vehicles";

export default function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="collections" element={<Collections />}>
            <Route index element={<Navigate replace to="vehicles" />} />
            <Route path="wooden-toys" element={<WoodenToys />} />
            <Route path="learning-toys" element={<Learning />} />
            <Route path="plushies" element={<Plushies />} />
            <Route path="vehicles" element={<Vehicles />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

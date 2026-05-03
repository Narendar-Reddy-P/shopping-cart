import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <header>
      <NavLink to="/">ShopLift</NavLink>
      <NavLink to="collections">Collections</NavLink>
      <NavLink to="cart">🛒</NavLink>
    </header>
  );
}

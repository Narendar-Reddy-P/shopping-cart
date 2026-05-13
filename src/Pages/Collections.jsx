import { Outlet } from "react-router-dom";
import ShopNav from "../Components/ShopNav";

export default function Collections() {
  return (
    <div>
      <ShopNav />
      <Outlet />
    </div>
  );
}

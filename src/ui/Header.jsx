import { Link } from "react-router-dom";
import SearchOrder from "../faetures/order/SearchOrder";
import Username from "../faetures/user/Username";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between bg-yellow-400 px-4 py-3 uppercase border-b border-stone-200">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username/>
    </header>
  );
}
export default Header;

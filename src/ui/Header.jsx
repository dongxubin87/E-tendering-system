import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex mx-12 my-6 justify-between itescen">
      <Logo />
      <div className="">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;

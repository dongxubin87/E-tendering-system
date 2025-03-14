import { Link } from "react-router-dom";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";

function Header() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex mx-12 my-6 justify-between ">
      <Logo />
      <div className="flex justify-center items-center gap-4 ">
        <p>{user?.email}</p>
        {user ? (
          ""
        ) : (
          <Link
            className="border bg-amber-300 py-0.5 px-1.5 rounded-md text-lg hover:bg-amber-500"
            to="/login"
          >
            Login
          </Link>
        )}
        {user ? <Logout /> : ""}
      </div>
    </div>
  );
}

export default Header;

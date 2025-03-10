import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex gap-6 justify-center items-center">
      <Link to="/">
        <img src="./logo.png" alt="logo" width={50} />
      </Link>
      <p>E-Tendering System</p>
    </div>
  );
}

export default Logo;

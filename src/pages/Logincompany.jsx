import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import { useNavigate } from "react-router-dom";

function LoginCompany() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("company@gmail.com");
  const [password, setPassword] = useState("11111111");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <div className=" flex justify-center items-center bg-gradient-to-b from-[#38CBFC] to-[#217896] flex-grow">
      <div className="flex  justify-center items-center">
        <img src="./login-pg.png" alt="login" className="w-xl" />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center  p-4 bg-gray-300  rounded-2xl ">
        <h2 className="text-6xl">COMPANY</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 justify-center items-center "
        >
          <input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-80 h-12 bg-amber-50 rounded-2xl p-2"
          />
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="w-80 h-12 bg-amber-50 rounded-2xl p-2"
          />
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="bg-[#D9D9D9] rounded-lg text-xl w-28 h-10"
            >
              Signup
            </button>
            <button className="bg-[#D9D9D9] rounded-lg text-xl w-28 h-10">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCompany;

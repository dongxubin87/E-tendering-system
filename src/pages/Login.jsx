import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center bg-gradient-to-b from-[#38CBFC] to-[#217896] flex-grow">
      <div className="flex  justify-center items-center">
        <img src="./login-pg.png" alt="login" className="w-xl" />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <button
          onClick={() => navigate("/logincity")}
          className="bg-[#D9D9D9] rounded-lg text-4xl w-80 h-12"
        >
          CITY
        </button>
        <button
          onClick={() => navigate("/logincompany")}
          className="bg-[#D9D9D9] rounded-lg text-4xl w-80 h-12"
        >
          COMPANY
        </button>
      </div>
    </div>
  );
}

export default Login;

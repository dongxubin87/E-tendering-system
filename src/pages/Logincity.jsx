import { Form } from "react-router-dom";

function Logincity() {
  return (
    <div className=" flex justify-center items-center bg-gradient-to-b from-[#38CBFC] to-[#217896] flex-grow">
      <div className="flex  justify-center items-center">
        <img src="./login-pg.png" alt="login" className="w-xl" />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center  p-4 bg-gray-300  rounded-2xl ">
        <h2 className="text-6xl">CITY</h2>
        <form className="flex flex-col gap-10 justify-center items-center ">
          <input
            type="email"
            id="email"
            placeholder="username"
            className="w-80 h-12 bg-amber-50 rounded-2xl p-2"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="w-80 h-12 bg-amber-50 rounded-2xl p-2"
          />
          <button
            type="reset"
            className="bg-[#D9D9D9] rounded-lg text-xl w-36 h-10"
          >
            RESET
          </button>
        </form>
      </div>
    </div>
  );
}

export default Logincity;

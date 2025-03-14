import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={logout}
      disabled={isLoading}
      className="border bg-amber-300 py-0.5 px-1.5 rounded-md ml-6  hover:bg-amber-500"
    >
      Logout
    </button>
  );
}

export default Logout;

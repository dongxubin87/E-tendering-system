function Button({ children }) {
  return (
    <button className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400">
      {children}
    </button>
  );
}

export default Button;

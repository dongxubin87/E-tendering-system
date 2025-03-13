function FormRow({ label, error, children }) {
  return (
    <div className="flex">
      {label && (
        <label className="w-72" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-600 text-sm ml-20">* {error}</span>}
    </div>
  );
}

export default FormRow;

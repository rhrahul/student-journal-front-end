const InputField = ({ onChange, className, inputProps }) => {
  const { name, label, type } = inputProps;
  const inputClass =
    "transition w-full border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 focus:ring-2";
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-bold text-slate-500"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          type="text"
          id={name}
          rows="7"
          className={inputClass}
          onChange={onChange}
          {...inputProps}
        />
      ) : (
        <input
          type="text"
          id={name}
          className={inputClass}
          onChange={onChange}
          {...inputProps}
        />
      )}
    </div>
  );
};

export default InputField;

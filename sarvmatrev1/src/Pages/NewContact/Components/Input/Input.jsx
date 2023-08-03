const Input = ({
  name,
  value,
  title,
  id,
  onChange,
  placeholder,
  inputClass,
  onBlur,
  required,
  error,
}) => {
  return (
    <div className="mb-[6px] w-full">
      <div>
        <label htmlFor={id} className="text-xl font-medium">
          {title}
          {required !== false && <span className="text-red-600 ml-2">*</span>}
        </label>
      </div>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-inherit border-b-2 border-gray-400 active:border-gray-700 focus:border-gray-700 focus:outline-0 cursor-pointer py-1 ${inputClass}`}
        onBlur={onBlur}
      />
      <div className="text-[12px] h-[12px] my-2 text-red-600">{error}</div>
    </div>
  );
};
export default Input;

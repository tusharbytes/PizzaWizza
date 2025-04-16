const Input = ({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required
 }) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={name} className="block mb-1 text-sm font-medium  ">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border rounded-lg   focus:outline-none focus:ring-2 ${error
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-white'
                    }`}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;

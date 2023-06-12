"use client";

interface Props {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  label: string;
  value: string;
  type: string;
}

const Input: React.FC<Props> = ({
  onChange,
  onBlur,
  placeholder,
  value,
  label,
  id,
  name,
  type,
}) => {
  return (
    <div className="w-full my-2 group">
      <label className="text-sm text-gray-400 font-medium ">{label}</label>
      <input
        type={type}
        className="w-full bg-[#f2f1ee99] p-3 outline-none rounded   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        value={value}
        name={name}
      />
    </div>
  );
};

export { Input };

"use client";

interface Props {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  id: string;
  name: string | number;
  label: string;
  value: string;
  type: string;
}

const Input: React.FC<Props> = ({
  onChange,
  onBlur,
  placeholder,
  defaultChecked,
  value,
  label,
  id,
  name,
  type,
}) => {
  return (
    <div className="w-full">
      <label className="text-[14px] text-[#797979] ">
        {label}
        <input
          defaultChecked={defaultChecked}
          type={type}
          className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          id={id}
          name={name}
        />
      </label>
    </div>
  );
};

export { Input };

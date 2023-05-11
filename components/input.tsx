"use client";

interface Props {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: boolean;
  id: string;
  name: string;
  label: string;
  type: string;
}

const Input: React.FC<Props> = ({
  onChange,
  onBlur,
  placeholder,
  error,
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
          type={type}
          className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]"
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

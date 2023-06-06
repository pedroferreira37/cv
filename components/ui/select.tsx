"use client";

type Props = {
  options: string[];
  name: string;
  id: string;
  label: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({
  options,
  name,
  id,
  label,
  disabled,
  onChange,
}: Props) => {
  return (
    <div>
      <label className="text-[14px]  text-[#797979]">
        {label}
        <select
          name={name}
          id={id}
          onChange={onChange}
          disabled={disabled}
          className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px] disabled:opacity-50"
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

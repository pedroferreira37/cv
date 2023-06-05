"use client";

type Props = {
  options: string[];
  name: string;
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ options, name, id, label, onChange }: Props) => {
  return (
    <div>
      <label className="text-[14px]  text-[#797979]">
        {label}
        <select
          name={name}
          id={id}
          onChange={onChange}
          className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]"
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

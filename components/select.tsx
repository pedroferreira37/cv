"use client";

type Props = {
  name: string;
  disabled: boolean;
  years: number[];
  months: { [key: number]: string };
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ name, years, months, disabled, onChange }: Props) => {
  return (
    <div>
      <select
        onChange={onChange}
        name={name}
        disabled={disabled}
        className="
w-full  bg-[#f2f1ee99] p-3   outline-none rounded text-[#353535] text-[14px] disabled:opacity-50 hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition
                      "
      >
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select
        onChange={onChange}
        name={name}
        disabled={disabled}
        className="
w-full  bg-[#f2f1ee99] p-3   outline-none rounded text-[#353535] text-[14px] disabled:opacity-50 hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition
                      "
      >
        {Object.entries(months).map(([index, month]) => (
          <option value={index}>{month}</option>
        ))}
      </select>
    </div>
  );
};

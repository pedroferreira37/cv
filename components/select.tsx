"use client";

type Props = {
  name: string;
  id: string;
  disabled: boolean;
  years: number[];
  setYear: React.ChangeEventHandler<HTMLSelectElement>;
  setMonth: React.ChangeEventHandler<HTMLSelectElement>;
  yearValue: string;
  monthValue: string;
  months: { [key: number]: string };
};

export const Select = ({
  name,
  id,
  years,
  months,
  setYear,
  setMonth,
  yearValue,
  monthValue,
  disabled,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <select
        onChange={setYear}
        name={name}
        disabled={disabled}
        id={id}
        value={yearValue}
        className="
          w-full  bg-[#f2f1ee99] p-3 grid 
          outline-none rounded text-[#353535] text-[14px] disabled:opacity-50
          hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition
                      "
      >
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select
        onChange={setMonth}
        name={name}
        id={id}
        disabled={disabled}
        value={monthValue}
        className="w-full  bg-[#f2f1ee99] p-3   outline-none rounded text-[#353535] text-[14px] disabled:opacity-50
            hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
      >
        {Object.entries(months).map(([index, month]) => (
          <option value={index}>{month}</option>
        ))}
      </select>
    </div>
  );
};

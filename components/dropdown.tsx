import { getYearsLength } from "@/lib/date";
import { months } from "@/lib/date";

type Props = {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  id: string;
  name: string | number;
  label: string;
};

export const DropDown = ({
  year,
  month,
  label,
  placeholder,
  onChange,
  id,
}: Props) => {
  const years = getYearsLength(60);
  return (
    <div className="">
      <label className="text-[#797979] text-sm font-medium">
        {label}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <select
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]"
            >
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]"
            >
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
      </label>
    </div>
  );
};

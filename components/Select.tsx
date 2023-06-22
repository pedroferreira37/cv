import { years } from "@/lib/date";

type Props = {
  options: {}[];
  onSelect: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
};

export const Select = ({ options, onSelect, name, label }: Props) => {
  return (
    <select
      name={name}
      onSelect={(e) => console.log(e.target.name)}
      className="w-full bg-[#eee] border  p-3 outline-none rounded   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
    >
      {options.map(({ value, label }) => (
        <option value={label}>{label}</option>
      ))}
    </select>
  );
};

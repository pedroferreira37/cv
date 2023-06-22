import { years } from "@/lib/date";

type Props = {
  options: { value: string; label: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  placeholder: string;
  disabled: boolean;
  value: string;
};

export const Select = ({
  options,
  onChange,
  name,
  value,
  disabled,
  placeholder,
}: Props) => {
  return (
    <select
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      className="w-full bg-[#eee] border  p-3 outline-none rounded disabled:hover:ring-transparent  text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
    >
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};

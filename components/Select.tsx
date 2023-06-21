import { years } from "@/lib/date";

type Props = { options: {}[] , onChange: React.ChangeEventHandler<HTMLSelectElement>}

export const Select = ({ options, onChange, label }: Props) => {
  return (
   
    <select className="w-full bg-[#eee] border  p-3 outline-none rounded   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition">
      {options.map(({ value, label })=> 
        <option value={value}>{label}</option>
      )}
    </select>
   
  );
};

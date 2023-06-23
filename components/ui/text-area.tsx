interface Props {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  id: string;
  name: string;
  label: string;
  value: string;
}

export const TextArea = ({
  id,
  onChange,
  name,
  placeholder,
  value,
  label,
}: Props) => {
  return (
    <div>
      <label className="text-sm text-gray-400 font-medium ">{label}</label>
      <textarea
        id={id}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        cols={20}
        rows={8}
        className="w-full bg-[#eee] border  p-3 outline-none rounded   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition resize-none"
      ></textarea>
    </div>
  );
};

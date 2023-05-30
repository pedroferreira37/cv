"use client";
export function TextArea({
  cols,
  rows,
  length,
  label,
  name,
  onChange,
}: {
  cols: number;
  rows: number;
  length: number;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div className="w-full">
      <label className="text-[14px] text-[#797979] ">
        {label}
        <textarea
          maxLength={length}
          className="
    w-full bg-[#eee] resize-none  px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]"
          cols={cols}
          rows={rows}
          name={name}
          onChange={onChange}
        ></textarea>
      </label>
    </div>
  );
}

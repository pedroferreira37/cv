"use client";
export function TextArea({ cols, rows, length, label }) {
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
        ></textarea>
      </label>
    </div>
  );
}

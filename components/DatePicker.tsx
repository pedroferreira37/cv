import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

const start = (new Date().getFullYear() - 40).toString();
const end = new Date().getFullYear().toString();

const years = dayjs.max([dayjs(), dayjs(start), dayjs(end)]);

export const DatePicker = () => {
  console.log(years);
  return (
    <select>
      {/* {years.map((date) => (
        <option>{date}</option>
      ))} */}
    </select>
  );
};

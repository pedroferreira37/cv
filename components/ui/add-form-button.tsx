import { Resume } from "@/lib/reducer";
import { FiArrowDown, FiArrowLeft, FiPlus } from "react-icons/fi";

type Props = {
  data: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  collapse: boolean;
  onCollapse: React.MouseEventHandler<HTMLButtonElement>;
};

export const FormHandlerButton = ({
  data,
  collapse,
  onClick,
  onCollapse,
}: Props) => {
  return (
    <div>
      {!data ? (
        <button
          className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
          onClick={onClick}
        >
          <FiPlus size={20} className="group-hover:rotate-90 transition" />
        </button>
      ) : (
        <button
          onClick={onCollapse}
          className="bg-gray-200 px-1 py-1 flex items-center rounded"
        >
          {collapse ? <FiArrowDown size={20} /> : <FiArrowLeft size={20} />}
        </button>
      )}
    </div>
  );
};

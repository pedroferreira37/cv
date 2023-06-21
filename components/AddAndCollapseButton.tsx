import { FiArrowDown, FiArrowLeft, FiPlus } from "react-icons/fi";

export const AddAndCollpaseButton = ({
  data,
  active,
  onDataRequest,
  onActive,
}) => {
  return (
    <div>
      {!data ? (
        <button
          className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
          onClick={onDataRequest}
        >
          <FiPlus size={20} className="group-hover:rotate-90 transition" />
        </button>
      ) : (
        <button
          onClick={onActive}
          className="bg-gray-200 px-1 py-1 flex items-center rounded"
        >
          {active ? <FiArrowDown size={20} /> : <FiArrowLeft size={20} />}
        </button>
      )}
    </div>
  );
};

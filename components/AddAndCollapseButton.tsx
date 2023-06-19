import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

export const AddAndCollpaseButton = ({
  created,
  active,
  onClick,
  onToggle,
}) => {
  return (
    <div>
      {!created ? (
        <button
          className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
          onClick={onClick}
        >
          <FiPlus size={20} className="group-hover:rotate-90 transition" />
        </button>
      ) : (
        <button
          onClick={onToggle}
          className="bg-gray-200 px-1 py-1 flex items-center rounded"
        >
          <motion.span
            transition={{ duration: 0.2 }}
            animate={{ rotate: active ? -90 : 0 }}
          >
            <FiArrowLeft size={20} />
          </motion.span>
        </button>
      )}
    </div>
  );
};

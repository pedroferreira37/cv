import { AnimatePresence, motion } from "framer-motion";
export const FormWrapper = ({ active, created, children }) => {
  return (
    <div>
      {created && (
        <motion.form
          animate={{ height: active ? 600 : 0 }}
          className="overflow-hidden px-4 py-3 h-full border-b"
        >
          {children}
        </motion.form>
      )}
    </div>
  );
};

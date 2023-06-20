import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export const FormWrapper = ({ active, created, children }) => {
  const [height, setHeight] = useState<number>(0);

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.offsetHeight);
  }, [created]);

  return (
    <div>
      {created && (
        <motion.form
          ref={ref}
          animate={{ height: active ? height + 20 : 0 }}
          className="overflow-hidden px-4 my-4 h-full border-b"
        >
          {children}
        </motion.form>
      )}
    </div>
  );
};

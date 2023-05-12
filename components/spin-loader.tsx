import { FiLoader } from "react-icons/fi";

export function SpinLoader({
  size,
  color,
}: {
  size: string | number;
  color?: string;
}) {
  return (
    <div>
      <FiLoader
        className="animate-spin w-full"
        size={size}
        color={color || "white"}
      />
    </div>
  );
}

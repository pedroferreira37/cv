import { Loader } from "./loader";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onChange: React.MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
  id: string;
  name: string;
  type: string;

  disabled: boolean;
};

export const Button = ({
  children,
  id,
  name,
  className,
  placeholder,
  disabled,
  onChange,
}: ButtonProps) => {
  return (
    <button
      onChange={onChange}
      id={id}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      className={className}
    >
      {children}
    </button>
  );
};

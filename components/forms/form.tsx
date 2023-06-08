"use client";

import Image from "next/image";
import { Loader } from "../loader";

type FormProps = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler;
  prevent?: boolean;
  className?: string;
  action?: string;
};

export const Form = ({
  children,
  onSubmit,
  prevent,
  action,
  className,
}: FormProps): React.ReactElement => {
  const submitActionHandler = (event: React.FormEvent) => {
    if (prevent) {
      event.preventDefault();
    }

    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form onSubmit={submitActionHandler} className={className} action={action}>
      {children}
    </form>
  );
};

type InputProps = {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  label: string;
  value: string;
  type: string;
};

Form.Input = ({
  id,
  name,
  label,
  value,
  type,
  onChange,
  onBlur,
  placeholder,
}: InputProps) => {
  return (
    <label className="text-[14px] text-[#797979]">
      {label}
      <input
        className="w-full bg-[#eee] px-[.425rem] py-[4px] outline-none rounded border  text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
        id={name}
        name={name}
        value={value}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
      />
    </label>
  );
};

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onChange: React.MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
  id: string;
  name: string;
  type: string;
  loading: boolean;
  disabled: boolean;
};

Form.Button = ({
  children,
  id,
  name,
  className,
  placeholder,
  disabled,
  onChange,
  loading,
}: ButtonProps) => {
  return (
    <button
      onChange={onChange}
      id={id}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      className="login-button"
    >
      {loading ? <Loader size={20} /> : "Continuar com e-mail"}
    </button>
  );
};

Form.GoogleAuthButton = ({ loading }: { loading: boolean }) => {
  return (
    <div className="btn-secondary">
      {loading ? (
        <Loader size={20} />
      ) : (
        <button className="flex gap-2">
          <Image width={16} height={16} src="/google.svg" alt="google_logo" />
          Continuar com google
        </button>
      )}
    </div>
  );
};

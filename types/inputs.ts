export type InputEvent<T> = React.ChangeEvent<T> & {
  target: {
    name: "profile" | "experience" | "education" | "skills";
    value: string;
  };
};

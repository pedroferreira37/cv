import { Professional } from "./professional-template";

export const renderDocument = (props): React.ReactElement => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
  }
};

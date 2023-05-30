import { Professional } from "./professional-template";

export const renderDocument = (props): React.ReactElement => {
  switch (props.template) {
    case "professional":
      return <Professional props={props.state} />;
  }
};

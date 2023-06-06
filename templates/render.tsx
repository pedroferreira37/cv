import { Professional } from "./professional-template";
import { Simple } from "./simple-template";

export const renderDocument = (props): React.ReactElement => {
  console.log(props);
  switch (props.template) {
    case "professional":
      return (
        <Simple
          profile={props.state.profile}
          experiences={props.state.experiences}
          educations={props.state.educations}
        />
      );
  }
};

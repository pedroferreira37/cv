"use client";
import { Basic } from "./basic-template";

export const renderDocument = (props): React.ReactNode => {
  switch (props.template) {
    case "professional":
      return (
        <Basic
          profile={props.state}
          experiences={props.state.experiences}
          educations={props.state.educations}
        />
      );
  }
};

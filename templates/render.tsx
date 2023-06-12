"use client";

import { Resume } from "@/lib/reducer";
import { Basic } from "./basic-template";

export const renderDocument = (props: {
  template: string;
  state: Resume;
}): React.ReactNode => {
  switch (props.template) {
    case "professional":
      return <Basic {...props.state} />;
  }
};

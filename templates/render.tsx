"use client";

import { Resume } from "@/lib/reducer";
import { Basic } from "./basic-template";

export const renderLayout = (props): React.ReactNode => {
  console.log(props);
  switch ("professional") {
    case "professional":
      return <Basic {...props} />;
  }
};

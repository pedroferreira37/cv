"use client";

import { Resume } from "@/lib/reducer";
import { Basic } from "./basic-template";

export const renderLayout = (props: Resume): React.ReactNode => {
  switch ("professional") {
    case "professional":
      return <Basic {...props} />;
  }
};

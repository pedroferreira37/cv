"use client";

import { Resume } from "@/lib/reducer";
import { Basic } from "./basic-template";

export const getLayout = (props: Resume): React.ReactNode => {
  switch (props.template) {
    case "basic":
      return <Basic {...props} />;
  }
};

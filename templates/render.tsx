"use client";
import { Resume } from "@prisma/client";
import { Basic } from "./basic-template";

export const renderDocument = (props): React.ReactNode => {
  switch (props.template) {
    case "professional":
      return <Basic {...props.state} />;
  }
};

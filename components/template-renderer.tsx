"use client";
import React from "react";
import { Professional } from "@/components/templates/professional-template";

export const TemplateRenderer = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
    default:
      return null;
  }
};

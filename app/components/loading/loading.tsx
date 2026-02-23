"use client";
import React from "react";
import { Size } from "../types/size.type";
import { LoadingProps } from "./loading.type";
import clsx from "clsx";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {
  const classes = clsx(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type }
  );
  return <span className={classes}></span>;
};

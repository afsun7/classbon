"use client";
import React, { FC, ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";
import { Size } from "../types/size.type";
import { twClassMerge } from "@/utils/tw-class-merge.util";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

export type BadgeProps = Omit<ComponentBase, "isDisabled"> & {
  children: ReactNode;
};

export const Badge: FC<BadgeProps> = ({
  variant,
  className,
  children,
  size = "tiny",
}) => {
  const classes = twClassMerge("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return <span className={classes}>{children}</span>;
};

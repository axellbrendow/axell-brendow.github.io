import React from "react";

import CodeDivider, { DividerProps } from "../CodeDivider";

interface TitleAndCodeDivider {
  title: string;
  fontSize?: string;
}

const TitleAndCodeDivider = ({
  title,
  fontSize,
  color,
}: TitleAndCodeDivider & DividerProps) => {
  return (
    <>
      <h1 className="mt-3 text-center">{title}</h1>
      <CodeDivider fontSize={fontSize} color={color} />
    </>
  );
};

export default TitleAndCodeDivider;

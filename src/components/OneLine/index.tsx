import type React from "react";
import { useMemo } from "react";
import { ONELINE_CONTAINER_CLASS_NAME, ONELINE_TEXT_CLASS_NAME } from "./utils";

export interface OneLineProps {
  text: string;
  textAlign?: "center" | "left" | "right";
  fontFamily?: string;
  fontSize?: string;
}

export function OneLine({ text, textAlign, fontFamily, fontSize }: OneLineProps) {
  const containerStyles = useMemo<React.HTMLAttributes<object>["style"]>(
    () => ({
      fontFamily,
      fontSize,
      textAlign: textAlign ?? "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }),
    [fontFamily, fontSize, textAlign]
  );

  const textStyles = useMemo<React.HTMLAttributes<object>["style"]>(
    () => ({
      width: "max-content",
      whiteSpace: "nowrap",
    }),
    []
  );

  return (
    <div className={ONELINE_CONTAINER_CLASS_NAME} style={containerStyles}>
      <div className={ONELINE_TEXT_CLASS_NAME} style={textStyles}>
        {text}
      </div>
    </div>
  );
}

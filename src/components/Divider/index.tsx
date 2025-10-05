import { useMemo, type CSSProperties } from "react";

export type DividerProps = {
  borderWidth?: CSSProperties["borderWidth"];
  borderColor?: CSSProperties["borderColor"];
  borderStyle?: CSSProperties["borderStyle"];
  style?: CSSProperties;
};

export const Divider = ({
  borderWidth = "0.1rem",
  borderColor = "currentColor",
  borderStyle = "solid",
  style,
}: DividerProps) => {
  const mergedStyle = useMemo(() => {
    return {
      color: 'inherit',
      borderStyle: borderStyle,
      borderWidth: borderWidth,
      borderColor: borderColor,
      ...style,
    };
  }, [borderColor, borderStyle, borderWidth, style]);

  return <hr style={mergedStyle} />;
};

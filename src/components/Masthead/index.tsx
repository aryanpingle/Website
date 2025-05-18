import { useEffect, useMemo } from "react";
import "./index.css";
import { Divider } from "../Divider";
import { resizeToFitOneLine } from "../../utils";

function resizeMasthead() {
  const container = document.querySelector(
    ".masthead-title-container"
  ) as HTMLElement;
  const text = document.querySelector(".masthead-title-text") as HTMLElement;
  resizeToFitOneLine(text, container);
}

document.addEventListener("load", resizeMasthead);

export const Masthead = () => {
  const dateStr = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, []);

  useEffect(() => {
    resizeMasthead();
    window.addEventListener("resize", resizeMasthead);
  }, []);

  return (
    <div className="masthead">
      <div className="masthead-title-container">
        <div className="masthead-title-text">The Daily Pingle</div>
      </div>
      <Divider style={{ margin: "0.2rem 0" }} />
      <Divider style={{ margin: "0.2rem 0" }} />
      <div className="masthead-subtitle">
        <span>Volume 39 Issue 16</span>
        <span>{dateStr}</span>
        <span>Price: One Rupee Only</span>
      </div>
      <Divider style={{ margin: "0.2rem 0" }} />
    </div>
  );
};

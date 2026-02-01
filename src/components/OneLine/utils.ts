import { resizeToFitOneLine } from "../../utils";

export const ONELINE_CONTAINER_CLASS_NAME = "oneline-text-container";
export const ONELINE_TEXT_CLASS_NAME = "oneline-text-content";

export function adjustOnelineComponents() {
  [
    ...document.querySelectorAll<HTMLElement>(
      `.${ONELINE_CONTAINER_CLASS_NAME}`,
    ),
  ].forEach((containerElement) => {
    const textElement = containerElement.querySelector<HTMLElement>(
      `.${ONELINE_TEXT_CLASS_NAME}`,
    );

    if (!textElement) return;
    resizeToFitOneLine(textElement, containerElement);
  });
}

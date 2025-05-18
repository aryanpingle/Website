export type ResizeToFitOneLineOptions = {
  maxFontSizePx?: number;
  widthMultiplier?: number;
};

export function resizeToFitOneLine(
  textElement: HTMLElement | null,
  containerElement: HTMLElement | null,
  options?: ResizeToFitOneLineOptions
) {
  if (!textElement || !containerElement) return;

  // Set default values of options
  const actualOptions = Object.assign(
    {
      maxFontSizePx: 160,
      widthMultiplier: 0.95,
    },
    options
  );

  const textElementStyle = getComputedStyle(textElement);

  const initialFontSizeString = textElementStyle.fontSize;
  const initialFontSize = parseInt(
    initialFontSizeString.substring(0, initialFontSizeString.length - 2)
  );
  const initialWidth = textElement.scrollWidth;
  const targetWidth =
    containerElement.offsetWidth * actualOptions.widthMultiplier;
  console.log({
    initialFontSizeString,
    initialFontSize,
    initialWidth,
    targetWidth,
  });

  const targetFontSize = Math.min(
    targetWidth * (initialFontSize / initialWidth),
    actualOptions.maxFontSizePx
  );
  console.log(
    `${targetWidth} * (${initialFontSize} / ${initialWidth}) = ${targetFontSize}`
  );
  textElement.style.fontSize = `${targetFontSize}px`;
}

import { getSaloonOutlinePath } from "@/utils";
import "./Promo.css";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const Root = styled(Paper)(() => ({
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
  color: "inherit",
}));

const SIZE = 100;
const R = 10;

type PromoProps = {
  text?: string;
  imageSrc: string;
};

export const Promo = memo(({ imageSrc }: PromoProps) => {
  const outerSvgPathD = getSaloonOutlinePath(SIZE, SIZE, R);
  const innerSvgPathD = getSaloonOutlinePath(SIZE, SIZE, R, 1);

  return (
    <Root>
      <div className="frontpage-promo" style={{ padding: `${R}%` }}>
        <div className="frontpage_promo-image">
          <svg
            className="promo_svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ pointerEvents: "none", userSelect: "none", opacity: 0.8 }}
          >
            <defs>
              {/* <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="currentColor" />
                <stop offset="100%" stop-color="black" />
              </linearGradient> */}
            </defs>
            <path
              d={`${outerSvgPathD} ${innerSvgPathD}`}
              fill="black"
              fillRule="evenodd"
            ></path>
            <path d={innerSvgPathD} fill="currentColor" opacity={0.5}></path>
          </svg>
          <div style={{ zIndex: 1, position: "relative" }}>
            <img
              loading="lazy"
              src={imageSrc}
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </Root>
  );
});

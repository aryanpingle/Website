import "./Article.css";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MASK_IMAGE } from "@/images";
import { memo } from "react";
import { getSaloonOutlinePath2 } from "@/utils";

const Root = styled(Paper)(() => ({
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
  color: "inherit",
}));

type ArticleProps = {
  title?: string;
  imageSrc?: string;
  text?: string;
  date?: string;
  link?: string;
  linkText?: string;
};

export const Article = memo(
  ({ title, date, imageSrc, text, link, linkText }: ArticleProps) => {
    const paras = (text ?? "").trim().split(/\n+/g);

    const RY = 20;
    const PY = 10;
    const ASPECT_RATIO = 5;
    const outerSvgPathD = getSaloonOutlinePath2(
      100,
      100,
      RY / ASPECT_RATIO,
      RY,
    );
    const innerSvgPathD = getSaloonOutlinePath2(
      100,
      100,
      RY / ASPECT_RATIO,
      RY,
      PY / ASPECT_RATIO,
      PY,
    );

    console.log("outer", outerSvgPathD);
    console.log("inner", innerSvgPathD);

    return (
      <Root>
        <div className="frontpage-article">
          {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
          {date && (
            <div
              style={{
                textAlign: "center",
                fontStyle: "italic",
                marginBottom: "1rem",
              }}
            >
              Senku Ishigami — {date}
            </div>
          )}
          <img
            src={imageSrc}
            style={{
              maxWidth: "100%",
              maskImage: `url(${MASK_IMAGE})`,
              maskMode: "luminance",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              filter: "sepia(1)",
            }}
            alt=""
          />

          {text &&
            paras.map((para) => <p style={{ textAlign: "justify" }}>{para}</p>)}

          {link && (
            <a className="frontpage_article-link" href={link}>
              <svg
                className="promo_svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                  opacity: 0.8,
                }}
              >
                <path
                  d={`${outerSvgPathD} ${innerSvgPathD}`}
                  fill="black"
                  fillRule="evenodd"
                />
                <path d={innerSvgPathD} fill="currentColor" opacity={0.5} />
              </svg>
              {linkText}
            </a>
          )}
        </div>
      </Root>
    );
  },
);

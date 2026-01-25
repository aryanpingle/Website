import { Masonry } from "@mui/lab";
import "./FrontPageGrid.css";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  HERO_IMAGE,
  MASK_IMAGE,
  OUTER_WILDS_IMAGE,
  TUNIC_IMAGE,
} from "@/images";
import { memo } from "react";

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
  footer?: string;
};

const Article = memo(({ title, imageSrc, text, footer }: ArticleProps) => {
  const paras = (text ?? "").trim().split(/\n+/g);

  return (
    <Root>
      <div className="frontpage-article">
        {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
        <img
          src={imageSrc}
          style={{
            maxWidth: "100%",
            maskImage: `url(${MASK_IMAGE})`,
            maskMode: "luminance",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            filter: "grayscale(1) sepia(1)",
          }}
          alt=""
        />
        {text &&
          paras.map((para) => <p style={{ textAlign: "justify" }}>{para}</p>)}
        {footer && <p style={{ textAlign: "right" }}>{footer}</p>}
      </div>
    </Root>
  );
});

const HERO_TEXT = `
In all of jujutsu sorcerer history, there's never been anyone who has managed to subjugate this one. In this exclusive issue, with this sacred treasure, we summon 24 year old, Divergent Sila Divine General, Aryan Pingle.

While others coward behind platitudes of fake humility, he boldly proclaims himself to be a 'Web Developer Extraordinaire'. But don't be fooled by the sheer magnificence of his aptitude in Front-End Web Development, for his peers deem him a master of adaptability; he can make container management scripts as skillfully as he can prototype in Figma. This charismatic prodigy is the single greatest asset to the fields of Compiler Construction, Meta-programming, and Engineering in general (with the sole exception of Terry Davis, of course).`;

export const FrontPageGrid = () => {
  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3 }}
      spacing={0}
      sx={{ marginTop: "0.5rem" }}
    >
      <Article imageSrc={OUTER_WILDS_IMAGE} />
      <Article
        title="Inside the mind of a genius"
        imageSrc={HERO_IMAGE}
        text={HERO_TEXT}
      />
      <Article
        title="Seven dead in fishing accident"
        text="To be completely honest, this article is fake. I dunno, it just sounded like a cool headline that would realistically be on the front page of an old-timey newspaper. I like theatricality so sue me. Haha JK, don't though. I'm being for real. If you're reading this you're legally not allowed to sue me. Get fukt."
      />
      <Article imageSrc={TUNIC_IMAGE} />
      <Article
        title="Greatest of all time?"
        imageSrc={HERO_IMAGE}
        text="Aryan Pingle. Y'all know him, y'all motherfucking love him. But the question is — is he the GOAT?"
      />
    </Masonry>
  );
};

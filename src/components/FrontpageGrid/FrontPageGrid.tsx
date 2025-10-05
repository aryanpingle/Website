import { Masonry } from "@mui/lab";
import image from "../../assets/processed/hero-1.png";
import "./FrontPageGrid.css";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled(Paper)(() => ({
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const Article = ({
  title,
  imageSrc,
  text,
  footer,
}: {
  title: string;
  imageSrc?: string;
  text: string;
  footer?: string;
}) => {
  return (
    <Root>
      <div className="frontpage-article">
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <img
          src={imageSrc}
          style={{ maxWidth: "100%", filter: "grayscale(1) sepia(1)" }}
          alt=""
        />
        <p style={{ textAlign: "justify" }}>{text}</p>
        {footer && <p style={{ textAlign: "right" }}>{footer}</p>}
      </div>
    </Root>
  );
};

export const FrontPageGrid = () => {
  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3 }}
      spacing={0}
      sx={{ marginTop: "0.5rem" }}
    >
      <Article
        title="Seven dead in fishing accident"
        text="To be completely honest, this article is fake. I dunno, it just sounded like a cool headline that would realistically be on the front page of an old-timey newspaper. I like theatricality so sue me. Haha JK, don't though. I'm being for real. If you're reading this you're legally not allowed to sue me. Get fukt."
      />
      <Article
        title="Inside the mind of a genius"
        imageSrc={image}
        text="Like him or hate him — you gotta love Aryan Pingle. With his irreverant sense of humour and sheer aptitude for engineering, the charismatic web developer from Thane has captured the hearts and loins of many. Not to mention, he's mad cute."
      />
      <Article
        title="Aura."
        imageSrc={image}
        text="With the software developer's forway into corporate. there's only question on everyone's mind — what will the young prodigy do next?"
      />
      <Article
        title="Greatest of all time?"
        imageSrc={image}
        text="Aryan Pingle. Y'all know him, y'all motherfucking love him. But the question is — is he the GOAT?"
      />
    </Masonry>
  );
};

import image from "../../assets/image 7.png";
import "./FrontPageGrid.css";

const Article = ({
  title,
  imageSrc,
  text,
}: {
  title: string;
  imageSrc?: string;
  text: string;
}) => {
  return (
    <div>
      <img
        src={imageSrc}
        style={{ maxWidth: "100%", filter: "grayscale(1) sepia(1)" }}
        alt=""
      />
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <p style={{ textAlign: "justify" }}>{text}</p>
    </div>
  );
};

export const FrontPageGrid = () => {
  return (
    <div className="frontpage-grid">
      <Article title="Seven dead in fishing accident" text="I dunno" />
      <Article
        title="Greatest of all time?"
        imageSrc={image}
        text="With the software developer's foray into corporate. there's only question on everyone's mind — what will the young prodigy do next?"
      />
      <Article
        title="Greatest of all time?"
        imageSrc={image}
        text="With the software developer's forway into corporate. there's only question on everyone's mind — what will the young prodigy do next?"
      />
      <Article
        title="Greatest of all time?"
        imageSrc={image}
        text="Aryan Pingle. Y'all know him, y'all motherfucking love him. But the question is — is he the GOAT?"
      />
    </div>
  );
};

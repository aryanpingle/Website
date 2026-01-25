import "./index.css";
import { Divider } from "../Divider";
import { OneLine } from "../OneLine";

export const Masthead = () => {
  return (
    <div className="masthead">
      <Divider style={{ margin: "0.2rem 0", borderWidth: '0.11rem' }} />
      <Divider style={{ margin: "0.2rem 0", borderWidth: '0.075rem', borderStyle: 'dashed' }} />
      <OneLine
        text="The Daily Pingle"
        fontFamily="Old London, serif"
        fontSize="10rem"
      />
      <Divider style={{ margin: "0.2rem 0", borderWidth: '0.075rem', borderStyle: 'dashed' }} />
      <Divider style={{ margin: "0.2rem 0", borderWidth: '0.11rem' }} />
    </div>
  );
};

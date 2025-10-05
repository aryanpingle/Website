import "./index.css";
import { Divider } from "../Divider";
import { OneLine } from "../OneLine";

export const Masthead = () => {
  return (
    <div className="masthead">
      <Divider style={{ margin: "0.2rem 0" }} />
      <Divider style={{ margin: "0.2rem 0" }} />
      <OneLine text="The Daily Pingle" fontFamily="Old London, serif" />
      <Divider style={{ margin: "0.2rem 0" }} />
    </div>
  );
};

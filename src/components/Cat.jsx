import { useContext } from "react";
import StateContext from "../context";

const Cat = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity } = value;

  return (
    <>
      <p>The cat is {activity}</p>
    </>
  );
};

export default Cat;

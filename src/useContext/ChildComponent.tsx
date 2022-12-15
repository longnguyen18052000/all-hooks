import React, { useContext } from "react";
import { ExampleContext } from ".";

const ChildComponent: React.FC = () => {
  const { color } = useContext(ExampleContext);
  return <p style={{ color }}>This text is {color}</p>;
};

export default ChildComponent;

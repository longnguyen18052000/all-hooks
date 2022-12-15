import React, { createContext } from "react";
import ChildComponent from "./ChildComponent";

export const ExampleContext = createContext<any>("");

const UseContext: React.FC = () => {
  return (
    <ExampleContext.Provider value={{ color: "blue" }}>
      <ChildComponent />
    </ExampleContext.Provider>
  );
};

export default UseContext;

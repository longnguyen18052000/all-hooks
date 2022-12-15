import { FC, useState } from "react";
import { data } from "./data";

const LogImport: FC = () => {

  const [result, setResult] = useState<string>();

  const handleChangeBackground = (item: string, index: number): void => {
    data.map((i) => {
      if (item === i.project) {
        setResult(i.project);
      }
    });
  };

  return (
    <div className="mt-10 text-center w-full">
      {data.map((item, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => handleChangeBackground(item.project, index)}
            className="border-2 rounded px-3 mr-10 py-1"
            style={item.project === result ? { background: "black", color: "white" } : {}}
          >
            {item.project}
          </button>
        );
      })}
    </div>
  );
};

export default LogImport;

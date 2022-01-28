import React from "react";
import { TitleGridProps } from "./TitleGrid";
import { useNavigate } from "react-router-dom";

type Props = {
  url: string;
  children: JSX.Element;
};

function TitleGridwButton(props: Props) {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate(props.url);
  };

  return (
    <div>
      {props.children}

      <button onClick={buttonClickHandler}>View</button>
    </div>
  );
}

export default TitleGridwButton;

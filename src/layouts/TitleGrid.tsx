import React from "react";
import Grid from "./Grid";

export type TitleGridProps = {
  title: string;
  subtitle: string;
  children: JSX.Element[];
};

const TitleGrid = (props: TitleGridProps) => {
  return (
    <div className="title-grid-wrapper">
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>

      <div className="grid-wrapper">
        <Grid children={props.children} />
      </div>
    </div>
  );
};

export default TitleGrid;

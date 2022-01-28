import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  children: JSX.Element;
};

const Card = (props: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-children">{props.children}</div>
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>
    </div>
  );
};

export default Card;

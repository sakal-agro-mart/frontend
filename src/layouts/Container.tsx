import React from "react";

type ContainerProps = {
  children: JSX.Element;
};

const Container = (props: ContainerProps) => {
  return <div className="container-wrapper">{props.children}</div>;
};

export default Container;

import React from "react";

type FormWrapperProps = {
  children: JSX.Element;
};

function FormWrapper(props: FormWrapperProps) {
  return <div className="form-wrapper">{props.children}</div>;
}

export default FormWrapper;

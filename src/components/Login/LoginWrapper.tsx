import React from "react";

type LoginWrapperProps = {
  children: JSX.Element;
};

function LoginWrapper(props: LoginWrapperProps) {
  return (
    <div className="login-wrapper">
      <div className="left">
        <div className="wrapper-title">
          <span className="sakal">SAKAL</span>
          <span className="agro">AGRO</span>
          <span className="mart">MART</span>
        </div>
        <div className="wrapper-subtitle">
          the best place to buy anything organic
        </div>
      </div>

      <div>{props.children}</div>
    </div>
  );
}

export default LoginWrapper;

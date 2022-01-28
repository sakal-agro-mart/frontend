import React from "react";
import { RouteProps } from "react-router-dom";
import LoginWrapper from "../components/Login/LoginWrapper";
import FormWrapper from "../components/Login/FormWrapper";
import { Formik } from "formik";

const Login = (props: RouteProps) => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>h login?</h1>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;

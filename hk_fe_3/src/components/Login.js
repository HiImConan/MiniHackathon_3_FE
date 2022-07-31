import React from "react";
import {
  IdInput,
  LoginInputDiv,
  LoginTitle,
  PasswordInput,
} from "../styles/User/LoginStyles";
import { LoginWrap } from "./../styles/User/LoginStyles";

const Login = () => {
  return (
    <LoginWrap>
      <LoginTitle>Log In</LoginTitle>
      <LoginInputDiv>
        <IdInput placeholder="이메일을 입력하세요" />
        <PasswordInput type="password" />
      </LoginInputDiv>
    </LoginWrap>
  );
};

export default Login;

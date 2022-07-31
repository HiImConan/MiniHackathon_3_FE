import React from "react";
import {
  IdInput,
  InputTitle,
  LoginInputDiv,
  LoginTitle,
  PasswordInput,
  LoginDiv,
  LoginWrap,
  LoginSection,
} from "../styles/User/LoginStyles";

import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <LoginSection>
      <LoginWrap>
        <LoginDiv>
          <LoginTitle>Sign In</LoginTitle>
          <LoginInputDiv>
            <InputTitle>ID</InputTitle>
            <IdInput placeholder="Enter ID..." />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Password</InputTitle>
            <PasswordInput placeholder="Enter password..." type="password" />
            <Button
              variant="secondary"
              size="sm"
              style={{ width: "250px", marginTop: "25px" }}
            >
              Submit
            </Button>
          </LoginInputDiv>
        </LoginDiv>
      </LoginWrap>
    </LoginSection>
  );
};

export default Login;

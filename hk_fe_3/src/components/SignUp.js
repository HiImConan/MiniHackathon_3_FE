import React from "react";
import Button from "react-bootstrap/Button";
import {
  IdInput,
  InputTitle,
  LoginInputDiv,
  LoginTitle,
  PasswordInput,
  LoginDiv,
  LoginWrap,
  LoginSection,
} from "../styles/User/SginUpStyles";

const SignUp = () => {
  return (
    <LoginSection>
      <LoginWrap>
        <LoginDiv>
          <LoginTitle>Sign Up</LoginTitle>
          <LoginInputDiv>
            <InputTitle>Name</InputTitle>
            <IdInput placeholder="Enter Your Name..." />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>age</InputTitle>
            <IdInput placeholder="Enter Your age..." />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>NickName</InputTitle>
            <IdInput placeholder="Create Name..." />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Email</InputTitle>
            <IdInput placeholder="Enter Email..." />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Password</InputTitle>
            <PasswordInput placeholder="Create password..." type="password" />
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

export default SignUp;

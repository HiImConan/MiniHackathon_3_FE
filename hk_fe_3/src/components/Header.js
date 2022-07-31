import React from "react";
import {
  HeaderButtonDiv,
  HeaderDiv,
  HeaderSignUp,
  HeaderTitle,
} from "../styles/Header/HeaderStyles";
import { HeaderLogin } from "./../styles/Header/HeaderStyles";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>루튼 토마토</HeaderTitle>
      <HeaderButtonDiv>
        <HeaderLogin>Sign In</HeaderLogin>
        <HeaderSignUp>Sign Up</HeaderSignUp>
      </HeaderButtonDiv>
    </HeaderDiv>
  );
};

export default Header;

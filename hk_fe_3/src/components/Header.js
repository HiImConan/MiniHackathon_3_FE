import React from "react";
import { useState } from "react";
import {
  HeaderButtonDiv,
  HeaderDiv,
  HeaderSignUp,
  HeaderTitle,
} from "../styles/Header/HeaderStyles";
import { HeaderLogin } from "./../styles/Header/HeaderStyles";

const Header = () => {
  const [isSign, setIsSign] = useState(true);

  return (
    <HeaderDiv>
      <HeaderTitle>루튼 토마토</HeaderTitle>
      <HeaderButtonDiv>
        <HeaderLogin>{isSign ? "Sign Out" : "Sign In"}</HeaderLogin>
        <HeaderSignUp>Sign Up</HeaderSignUp>
      </HeaderButtonDiv>
    </HeaderDiv>
  );
};

export default Header;

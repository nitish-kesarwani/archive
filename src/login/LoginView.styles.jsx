import styled from "styled-components";
import banner from "../assets/images/banner.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 25%;
  background: white;
  border-radius: 4px;
  padding: 60px 50px;
  text-align: center;
  & > div {
    margin: 15px 0;
  }
`;

export const LogoImg = styled.img`
  width: 80%;
`;

export const SignInButton = styled.button`
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  background-color: #2483c5;
  outline: none;
  border: none;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #005d9e;
    border-color: #2483c5;
    cursor: pointer;
  }
`;

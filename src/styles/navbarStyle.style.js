import styled from "styled-components";
import { BiBaseball } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

export const Nav = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 10;
`;

export const Logo = styled.a`
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    color: black;
    text-decoration: none;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

export const BaseballIcon = styled(BiBaseball)`
  color: #333;
  font-size: 22px;
  cursor: pointer;
`;

export const BackIcon = styled(IoIosArrowBack)`
  color: #333;
  font-size: 22px;
  cursor: pointer;
`;

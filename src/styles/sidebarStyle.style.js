import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: calc((100vw - var(--size-max-width)) / 2);
  width: 240px;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(20px)")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.4s ease;
`;

export const CloseIcon = styled(IoIosClose)`
  color: #333;
  font-size: 22px;
  align-self: flex-end;
  cursor: pointer;
`;

export const Profile = styled.img`
  margin-top: 10px;
  width: 150px;
  height: 150px;
  border-radius: 80%;
  align-self: center;
`;

export const Name = styled.span`
  margin-top: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const List = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  align-items: center;
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px; 
`;

export const MyIcon = styled(BsFillPersonFill)`
  cursor: pointer;
  font-size: 18px;
  color: black;
`;

export const Logout = styled.button`
  margin-top: auto;
  background: none;
  border: none;
  color: #818181ff;
  font-size: 14px;
  cursor: pointer;
  align-self: center;
`;
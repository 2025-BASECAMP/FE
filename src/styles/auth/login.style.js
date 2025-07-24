import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  height: 100%;
  background-color: var(--color-white);
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 80%;
  max-width: 360px;
`;

export const Title = styled.h1`
  font-family: "Pretendard-Bold";
  font-size: 2.4rem;
  text-align: center;
`;

export const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.6rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.5rem;
  font-family: "Pretendard-Regular";
`;

export const LoginButton = styled.button`
  padding: 1.2rem;
  font-size: 1.6rem;
  background-color: var(--color-main-blue);
  color: white;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: "Pretendard-500";
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0040cc;
  }
`;

import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 300px;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #111;
  margin-bottom: 15px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 0.25rem;
    color: #333;
  }

  input {
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 12px;
    background-color: #f9fafb;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      border-color: #007aff;
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
    }
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0063ce;
  }
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #555;
  margin-top: 1rem;
`;

export const SignupLink = styled.a`
  color: #007aff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

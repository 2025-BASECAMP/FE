import styled from "styled-components";

export const Card = styled.div`
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfo = styled.p`
  margin: 8px 0;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardDistance = styled.p`
  margin: 8px 0;
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
`;

export const CardOverview = styled.p`
  margin: 12px 0 0 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

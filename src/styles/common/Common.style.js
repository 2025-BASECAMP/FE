import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ErrorListWrapper = styled.div`
  margin-top: 20px;

  ul {
    text-align: left;
    display: inline-block;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;

  .title {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    color: #666;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

export const EndMessage = styled.div`
  text-align: center;
  padding: 30px;
  color: #888;
  border-top: 1px solid #eee;
  margin-top: 20px;
`;

import styled from 'styled-components';

export const Error = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600px;
    color: red;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    max-width: 400px;
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 10px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    align-items: center;
    min-height: 80px;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    min-width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    margin-left: 15px;

    strong {
      font-size: 14px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      a {
        text-decoration: none;
      }

      .issueLink {
        color: #333;
        margin-right: 10px;
        word-break: break-all;

        &:hover {
          color: #7159c1;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const LabelIssue = styled.span`
  background: ${props => props.color};
  border: 1px solid #eee;
  color: #fff;
  text-shadow: 1px 1px #333;
  letter-spacing: 0.5px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  padding: 6px;
`;

export const Paginator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  margin: 30px auto 0;

  button {
    border: 0;
    width: 50px;
    height: 50px;
    background: transparent;

    &:active {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }

  svg {
    color: #7159c1;
    width: 30px;
    height: inherit;
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;

  h2 {
    font-size: 12px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    padding: 8px;
    margin-left: 10px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;

    &:active {
      opacity: 0.7;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

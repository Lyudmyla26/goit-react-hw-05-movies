import styled from 'styled-components';
export const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-right: 10px;
`;
export const Button = styled.button`
  padding: 8px 16px;
  background-color: blue;
  text-align: center;
  display: block;
  margin: 20px auto;
  color: var(--main-color);
  border: 1px solid yellow;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  &:hover {
    color: yellow;
    border: 1px solid blue;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  cursor: pointer;
  color: #24292f;
  font-size: 15px;
  li > ul {
    margin-left: 25px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #24292f;
  padding: 6px 8px;
  border-radius: 4px;
  line-height: 20px;
  &:hover {
    background: rgba(208, 215, 222, 0.32);
  }
  & > svg {
    margin-right: 10px;
  }
`;

export const Text = styled.span`
  // margin-left: 10px;
`;

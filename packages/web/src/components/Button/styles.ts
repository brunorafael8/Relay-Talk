import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;

  background-color: #3cc6b7;
  border: none;
  color: #fff;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${darken(0.2, '#3cc6b7')};
  }
`;

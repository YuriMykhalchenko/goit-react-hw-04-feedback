import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Button = styled.button`
  padding: ${theme.space.secondary}px;
  padding-left: ${theme.space.secondary * 3}px;
  padding-right: ${theme.space.secondary * 3}px;
  font-size: ${theme.typography.text};
  cursor: pointer;
  box-shadow: 1px 3px 5px ${theme.colors.button};
  border: none;
  border-radius: 5px;
  color: aqua;
  background-color: ${theme.colors.button};

  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonHover};
    box-shadow: 1px 3px 5px ${theme.colors.buttonHover};
  }
`;

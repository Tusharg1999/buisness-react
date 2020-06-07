import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.8rem 1.8rem;
  color: white;
  width: 50%;
  height:65px;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  border-radius: 0.6rem;
  transition-property: transform;
  transition:0.2s,ease-in-out;
  ${({ theme }) => css`
    background: ${theme.secondary.main};
    @media only screen and (max-width: 1200px){
      width:100%;
    }
    @media only screen and (min-width: 600px) {

      cursor: pointer;
      &:hover {
        background: ${theme.secondary.light};
      }
    }
  `}
  &:active:hover {
    transform: scale(0.9);
  }
`;

export default Button;
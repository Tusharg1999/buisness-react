import styled, { css } from "styled-components";

const heading = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.text.primary};
  `};
`;

export default heading;
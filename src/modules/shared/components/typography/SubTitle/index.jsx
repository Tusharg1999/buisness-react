
import styled, { css } from "styled-components";

const subtitle = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1.3rem;
    color: ${theme.text.secondary};
  `};
`;

export default subtitle;
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    @media screen and (max-width: 43.75em) {
      padding: 1rem 1.4rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1rem 3.2rem;
    font-weight: 500;
    @media screen and (max-width: 43.75em) {
      padding: 1rem 2rem;
    }
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-grey-0);

    &:hover {
      /* background-color: var(--color-brand-700); */
    }
  `,
  secondary: css`
    color: var(--color-primary);
    background: var(--color-grey-0);
    border: 2px solid var(--color-primary);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;

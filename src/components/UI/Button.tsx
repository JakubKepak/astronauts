import styled from "styled-components";

const MainContainer = styled.button<{ variant?: string }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primaryButton};
  border: none;
  border-radius: var(--borderRadius);
  color: ${({ theme }) => theme.textColorWhite};
  font-family: inherit;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${props.theme.primaryButton};
    color: ${props.theme.textColorWhite};

    &:hover {
    background-color: ${props.theme.primaryButtonHover};
  }

  `};

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: ${props.theme.secondaryButton};
    color: ${props.theme.textColorPrimary};

    &:hover {
    background-color: ${props.theme.secondaryButtonHover};
  }
  `};

  ${(props) =>
    props.variant === "warn" &&
    `
    background-color: ${props.theme.primaryButton};
    color: ${props.theme.textColorWhite};

    &:hover {
    background-color: ${props.theme.primaryButtonHover};
  }
  `};
`;

interface Props {
  variant: "primary" | "secondary" | "warn";
  type: any;
  children: string;
  onClick?: any;
}

export default function Button({ children, variant, onClick, type }: Props) {
  return (
    <MainContainer onClick={onClick} variant={variant} type={type}>
      {children}
    </MainContainer>
  );
}

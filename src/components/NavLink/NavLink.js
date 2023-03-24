import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.div`
  & a {
    &:focus {
      outline: 3px dotted var(--color-white);
      outline-offset: 8px;
    }

    display: flex;
    gap: 12px;
    font-family: var(--font-primary);
    font-size: ${16 / 16}rem;
    font-weight: var(--font-weight-light);
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease-out;
    padding: 40px 0px;

    color: var(--color-white);
    text-decoration: none;

    ${(p) =>
      p.isThis
        ? `
    border-color: var(--color-white);
    `
        : ""}

    @media ${QUERIES.phoneAndSmaller} {
      line-height: ${19.2 / 16}rem;
      letter-spacing: 2.7px;
      padding: 0px;
    }
  }

  & a:hover {
    ${(p) => (!p.isThis ? "border-color: var(--color-light-blue);" : "")}
  }
`;

const Preface = styled.span`
  font-weight: var(--font-weight-bold);
  letter-spacing: 2px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const MainContent = styled.span`
  letter-spacing: 4px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${14 / 16}rem;
    font-weight: var(--font-weight-regular);
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    letter-spacing: 2.7px;
  }
`;

function NavLink({ to, idx, burger, children, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log(resolved);
  return (
    <Wrapper
      {...props}
      isThis={!burger && match && match.pathname.endsWith(to)}
    >
      <ClickableWrapper
        onClick={() => {
          window.location.href = "/frontendmentor_3" + resolved.pathname;
        }}
      >
        <Link to={to}>
          <Preface>{idx}</Preface>
          <MainContent>{children}</MainContent>
        </Link>
      </ClickableWrapper>
    </Wrapper>
  );
}

export default NavLink;

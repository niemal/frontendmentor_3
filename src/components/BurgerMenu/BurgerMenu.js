import styled, { keyframes } from "styled-components";
import { QUERIES } from "../constants";
import NavLink from "../NavLink";

const slideIn = keyframes`
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 65px;
    padding: 32px;
    width: 254px;
    min-height: 100%;
    backdrop-filter: blur(40.7px);

    animation: 0.3s ${(p) => (p.open ? slideIn : slideOut)} ease-in-out forwards;
  }
`;

const CloseIcon = styled.img`
  object-fit: cover;
  width: 19.09px;
  height: 19.09px;
  align-self: end;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

function BurgerMenu({ close, open }) {
  return (
    <Wrapper open={open}>
      <CloseIcon
        onClick={() => {
          close();
        }}
        src={"./assets/shared/icon-close.svg"}
        alt={"close menu icon"}
      />

      <NavWrapper onClick={close}>
        <NavLink idx={"00"} to={"/"} burger={true}>
          HOME
        </NavLink>
        <NavLink idx={"01"} to={"destination"} burger={true}>
          DESTINATION
        </NavLink>
        <NavLink idx={"02"} to={"crew"} burger={true}>
          CREW
        </NavLink>
        <NavLink idx={"03"} to={"technology"} burger={true}>
          TECHNOLOGY
        </NavLink>
      </NavWrapper>
    </Wrapper>
  );
}

export default BurgerMenu;

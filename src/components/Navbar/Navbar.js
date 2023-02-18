import styled from "styled-components";
import data from "../../data.json";
import NavLink from "../NavLink";
import BurgerMenu from "../BurgerMenu";
import { QUERIES } from "../constants";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 55px;
  padding-top: 40px;
  left: 0;
  height: 96px;
  width: 100%;
  z-index: 50;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
    justify-content: space-between;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 72px;
  width: 40%;
`;

const Line = styled.div`
  height: 1px;
  width: 85%;
  border-bottom: 1px solid var(--color-blue);
  margin-top: 22px;
  margin-right: -136px;
  z-index: 2;

  @media ${QUERIES.exclusiveWidth} {
    width: 68%;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 55px;
  padding-right: 24px;
  justify-content: center;
  backdrop-filter: blur(24px) brightness(130%);
  width: 60%;
  z-index: 1;

  @media ${QUERIES.exclusiveWidth} {
    width: 70%;
  }

  @media ${QUERIES.tabletAndSmaller} {
    width: 70%;
    padding: 0px 24px;
    backdrop-filter: blur(0px) brightness(120%);
    gap: 0px;
    justify-content: space-evenly;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobileHamburger = styled.img`
  object-fit: cover;
  display: none;
  width: 24px;
  height: 21px;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <LeftWrapper>
        <img
          src={data.basePath + "/assets/shared/logo.svg"}
          width={45}
          height={45}
          alt={"logo"}
        />
        <Line />
      </LeftWrapper>

      <RightWrapper>
        <NavLink idx={"00"} to={"/"}>
          HOME
        </NavLink>
        <NavLink idx={"01"} to={"destination"}>
          DESTINATION
        </NavLink>
        <NavLink idx={"02"} to={"crew"}>
          CREW
        </NavLink>
        <NavLink idx={"03"} to={"technology"}>
          TECHNOLOGY
        </NavLink>
      </RightWrapper>

      <MobileHamburger
        src={data.basePath + "/assets/shared/icon-hamburger.svg"}
        alt={"menu image"}
        onClick={() => {
          setOpen(true);
        }}
      />
      <BurgerMenu open={open} close={() => setOpen(false)} />
    </Wrapper>
  );
}

export default Navbar;

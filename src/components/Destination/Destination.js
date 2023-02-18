import styled from "styled-components";
import DestinationTabs from "../DestinationTabs";
import data from "../../data.json";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  min-height: 100%;
  max-width: clamp(1180px, 9vw, 1350px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 76px;
  padding-bottom: 120px;
  align-items: center;
  gap: 64px;

  @media ${QUERIES.exclusiveWidth} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    gap: 60px;
    padding-bottom: 62px;
    padding-top: 40px;
    padding-left: 98px;
    padding-right: 98px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
    padding-bottom: 58px;
    padding-top: 0px;
    gap: 32px;
    max-width: 100%;
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 28px;
  letter-spacing: 4.72px;
  width: max-content;
  align-self: start;
  line-height: ${33.6 / 16}rem;
  font-family: var(--font-primary);
  font-size: ${28 / 16}rem;
  color: var(--color-white);

  @media ${QUERIES.tabletAndSmaller} {
    margin-left: -60px;
    font-size: ${20 / 16}rem;
    line-height: ${24 / 16}rem;
    gap: 19px;
    letter-spacing: 3.38px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 18px;
    font-size: ${16 / 16}rem;
    line-height: ${19.2 / 16}rem;
    letter-spacing: 2.7px;
    align-self: center;
    justify-self: center;
    margin-left: 12px;
  }
`;

const PrefaceTopRow = styled.span`
  font-weight: var(--font-weight-bold);
  opacity: 0.25;
`;

const TopRowMain = styled.span`
  font-weight: var(--font-weight-regular);
`;

function Destination() {
  return (
    <Wrapper>
      <TopRow>
        <PrefaceTopRow>01</PrefaceTopRow>
        <TopRowMain>PICK YOUR DESTINATION</TopRowMain>
      </TopRow>
      <DestinationTabs />
    </Wrapper>
  );
}

export default Destination;

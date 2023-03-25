import styled from "styled-components";
import data from "../../data.json";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.section`
  position: relative;
  padding-top: 251px;
  display: flex;
  width: 100%;
  max-width: clamp(1180px, 9vw, 1250px);
  padding-bottom: 131px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: end;
  font-family: var(--font-primary);
  color: var(--color-blue);

  @media ${QUERIES.exclusiveWidth} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    padding-top: 106px;
    gap: 156px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
    gap: 81px;
    padding-bottom: 48px;
    min-height: 81vh;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const TopText = styled.h2`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  color: var(--color-light-blue);
  font-size: ${28 / 16}rem;
  line-height: ${34 / 16}rem;
  letter-spacing: 4.725px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    text-align: center;
    font-size: ${20 / 16}rem;
    letter-spacing: 3.38px;
    line-height: ${24 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${19.2 / 16}rem;
    letter-spacing: 2.7px;
  }
`;

const ExclusiveText = styled.h1`
  font-family: var(--font-tertiary);
  font-size: ${150 / 16}rem;
  line-height: ${170 / 16}rem;
  color: var(--color-white);
  font-weight: var(--font-weight-regular);
  letter-spacing: 12px;

  @media ${QUERIES.tabletAndSmaller} {
    line-height: ${150 / 16}rem;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${80 / 16}rem;
    line-height: ${100 / 16}rem;
    letter-spacing: 0px;
  }
`;

const MainText = styled.p`
  font-family: var(--font-secondary);
  color: var(--color-light-blue);
  font-weight: var(--font-weight-regular);
  font-size: ${18 / 16}rem;
  line-height: ${32 / 16}rem;
  max-width: 440px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${15 / 16}rem;
    line-height: ${25 / 16}rem;
    max-width: calc(100vw - 48px);
    width: 100%;
  }
`;

const ExploreWrapper = styled.a`
  cursor: pointer;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  transition: all 0.3s ease-in;
  background-color: transparent;
  display: grid;
  place-content: center;
  text-decoration: none;

  &:focus {
    outline: 3px dotted var(--color-white);
    outline-offset: 8px;
  }

  &:hover {
    background-color: var(--color-open-blue);
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 90px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 150px;
    height: 150px;
    padding-bottom: 0px;
  }
`;

const ExploreInside = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: var(--color-white);
  display: grid;
  place-content: center;
  letter-spacing: 2px;
  font-family: var(--font-tertiary);
  font-size: ${32 / 16}rem;
  font-weight: var(--font-weight-regular);
  line-height: ${36.67 / 16}rem;
  color: var(--color-black);

  @media ${QUERIES.phoneAndSmaller} {
    width: 150px;
    height: 150px;
    font-size: ${20 / 16}rem;
    line-height: ${22.92 / 16}rem;
    text-align: center;
    letter-spacing: 1.25px;
    margin-top: -24px;
  }
`;

function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <TopText>SO, YOU WANT TO TRAVEL TO</TopText>
        <ExclusiveText>SPACE</ExclusiveText>
        <MainText>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </MainText>
      </TextWrapper>

      <ClickableWrapper
        href={data.basePath + "/destination"}
        onClick={() => {
          window.location.href = data.basePath + "/destination";
        }}
      >
        <ExploreWrapper aria-label={"Explore button"}>
          <ExploreInside>EXPLORE</ExploreInside>
          <VisuallyHidden>Explore button</VisuallyHidden>
        </ExploreWrapper>
      </ClickableWrapper>
    </Wrapper>
  );
}

export default Home;

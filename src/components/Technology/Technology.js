import styled, { keyframes } from "styled-components";
import data from "../../data.json";
import { useState, useEffect } from "react";
import { QUERIES } from "../constants";
import { TitleWrapper, TitlePreface, TitleMain } from "../Crew";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.section`
  min-height: 100vh;
  max-width: clamp(1180px, 9vw, 1350px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 76px;

  @media ${QUERIES.exclusiveWidth} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 40px;
    gap: 60px;
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: 38px 1fr 38px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 32px;
    padding-top: 0px;
  }
`;

const MyTitleWrapper = styled(TitleWrapper)`
  @media ${QUERIES.tabletAndSmaller} {
    grid-column: 2;
    margin-left: -44px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 130px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
    justify-content: center;
    grid-column: -1 / 1;
    gap: 56px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 34px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 34px;
  }
`;

const BulletsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${(p) => (!p.trigger ? "margin-top: 112px;" : "")}

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: row;
    margin-top: 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    ${(p) => (!p.trigger ? "margin-top: 204px;" : "")}
  }
`;

const BulletContainer = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 3px dotted var(--color-white);
    outline-offset: 12px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    width: 56px;
    height: 56px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 40px;
    height: 40px;
  }
`;

const Bullet = styled.div`
  padding: 22px 32px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-content: center;

  border: 1px solid var(--color-white);
  background-color: ${(p) => (p.active ? "var(--color-white)" : "transparent")};
  opacity: ${(p) => (p.active ? "1" : "0.25")};

  transition: all 0.4s ease-in-out;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 18px 34px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 10px 18px;
  }
`;

const BulletLetter = styled.span`
  user-select: none;
  cursor: pointer;
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${32 / 16}rem;
  line-height: ${37 / 16}rem;
  letter-spacing: 2px;
  color: ${(p) => (p.shadow ? "transparent" : "inherit")};
  ${(p) =>
    !p.shadow
      ? `
  position: absolute;
  left: 34px;
  top: 23px;
  `
      : ""}
  color: ${(p) =>
    p.active ? "var(--color-very-dark-blue)" : "var(--color-white)"};

  @media ${QUERIES.tabletAndSmaller} {
    ${(p) =>
      !p.shadow
        ? `
  position: absolute;
  left: 28.3px;
  top: 18px;
  `
        : ""}
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${18.34 / 16}rem;
    letter-spacing: 1px;

    ${(p) =>
      !p.shadow
        ? `
  position: absolute;
  left: 16.3px;
  top: 11px;
  `
        : ""}
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 9px;
  }
`;

const TextOpener = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${16 / 16}rem;
  line-height: ${19.2 / 16}rem;
  letter-spacing: 2.7px;
  color: var(--color-light-blue);

  ${(p) => (!p.trigger ? "margin-top: -88px;" : "")}

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    line-height: ${16.8 / 16}rem;
    letter-spacing: 2.36px;
    ${(p) => (!p.trigger ? "margin-top: 0px;" : "")}
  }
`;

const textTransition = keyframes`
  0% {
    opacity: 0;
    transform: translateX(600%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const TextTitle = styled.h1`
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${56 / 16}rem;
  line-height: ${64.18 / 16}rem;
  color: var(--color-white);
  text-transform: uppercase;

  animation: 0.35s ${textTransition} ease-in forwards;
  z-index: 999;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${24 / 16}rem;
    line-height: ${27.5 / 16}rem;
  }
`;

const Description = styled.p`
  margin-top: 6px;
  max-width: 444px;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: ${18 / 16}rem;
  line-height: ${32 / 16}rem;
  color: var(--color-light-blue);

  animation: 0.45s ${textTransition} ease-in forwards;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 458px;
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: 327px;
    padding: 0px 24px;
    font-size: ${15 / 16}rem;
    line-height: ${25 / 16}rem;
  }
`;

const imageTransition = keyframes`
  0% {
    height: 527px;
    opacity: 0;
    border-radius: 5000px;
  }
  50% {
    height: 0px;
  }
  100% {
    height: 530px;
    transform: perspective(700px) rotateY(360deg);
    opacity: 1;
    border-radius: 0px;
  }
`;

const imageTransitionTablet = keyframes`
  0% {
    height: 310px;
    opacity: 0;
    border-radius: 5000px;
  }
  50% {
    height: 0px;
  }
  100% {
    height: 310px;
    transform: perspective(700px) rotateY(360deg);
    opacity: 1;
    border-radius: 0px;
  }
`;

const imageTransitionPhone = keyframes`
  0% {
    height: 170px;
    opacity: 0;
    border-radius: 5000px;
  }
  50% {
    height: 0px;
  }
  100% {
    height: 170px;
    transform: perspective(700px) rotateY(360deg);
    opacity: 1;
    border-radius: 0px;
  }
`;

const ImageContainer = styled.div`
  width: 515px;
  height: 527px;
  margin-right: -180px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    max-height: 310px;
    height: 310px;
    margin-right: 0px;
    overflow: hidden;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 170px;
    max-height: 170px;
    position: relative;
  }
`;

const DesktopImage = styled.img`
  object-fit: cover;
  width: 100%;

  animation: 0.35s ${imageTransition} ease-in forwards;
  transition: all 0.35s ease-in;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletImage = styled.img`
  display: none;
  object-fit: cover;
  width: 101%;

  animation: 0.35s ${imageTransitionTablet} ease-in forwards;
  transition: all 0.35s ease-in;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.phoneAndSmaller} {
    animation: 0.35s ${imageTransitionPhone} ease-in forwards;
  }
`;

const pickTechnology = (tech) => {
  for (let entry of data.technology) {
    if (entry.name === tech) {
      return entry;
    }
  }
};

function Technology() {
  const [trigger, setTrigger] = useState(true);
  const [tech, setTech] = useState(null);
  const [tab, setTab] = useState(data.technology[0].name);

  useEffect(() => {
    setTrigger(false);
    setTech(pickTechnology(tab));

    const timer = setTimeout(() => {
      setTrigger(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <Wrapper>
      <MyTitleWrapper>
        <TitlePreface>03</TitlePreface>
        <TitleMain>SPACE LAUNCH 101</TitleMain>
      </MyTitleWrapper>
      <Container>
        <InfoWrapper>
          <BulletsWrapper trigger={trigger}>
            {data.technology.map((tech, idx) => {
              if (tab === tech.name) {
                return (
                  <BulletContainer
                    key={idx}
                    aria-label={`active - ${tech.name} button`}
                  >
                    <Bullet active={true}>
                      <BulletLetter shadow={true}>{idx + 1}</BulletLetter>
                    </Bullet>
                    <BulletLetter active={true}>{idx + 1}</BulletLetter>
                  </BulletContainer>
                );
              }

              return (
                <ClickableWrapper
                  key={idx}
                  onClick={() => {
                    setTab(tech.name);
                  }}
                  aria-label={`${tech.name} button`}
                >
                  <BulletContainer>
                    <Bullet>
                      <BulletLetter shadow={true}>{idx + 1}</BulletLetter>
                    </Bullet>
                    <BulletLetter>{idx + 1}</BulletLetter>
                  </BulletContainer>
                </ClickableWrapper>
              );
            })}
          </BulletsWrapper>
          <TextWrapper>
            <TextOpener trigger={trigger}>THE TERMINOLOGY...</TextOpener>
            {trigger ? (
              <>
                <TextTitle>{tech?.name}</TextTitle>
                <Description>{tech?.description}</Description>
              </>
            ) : (
              ""
            )}
          </TextWrapper>
        </InfoWrapper>

        {trigger ? (
          <ImageContainer>
            <DesktopImage
              src={tech ? tech.images.portrait : ""}
              alt={tech?.name + " image"}
            />
            <TabletImage
              src={tech ? tech.images.landscape : ""}
              alt={tech?.name + " image"}
            />
          </ImageContainer>
        ) : (
          ""
        )}
      </Container>
    </Wrapper>
  );
}

export default Technology;

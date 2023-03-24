import styled, { keyframes } from "styled-components";
import data from "../../data.json";
import { QUERIES } from "../constants";
import { useState, useEffect } from "react";
import ClickableWrapper from "../ClickableWrapper";

const slideDown = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  99% {
    height: 80vh;
    opacity: 1;
  }
  100% {
    height: max-content;
  }
`;

const slideDownTablet = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  99% {
    height: 570px;
    opacity: 1;
  }
  100% {
    height: max-content;
  }
`;

const slideDownPhone = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 223px;
    opacity: 1;
  }
`;

const Wrapper = styled.section`
  min-height: 100vh;
  overflow: hidden;
  max-width: clamp(1180px, 9vw, 1350px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 76px;
  align-items: center;

  @media ${QUERIES.exclusiveWidth} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    padding-top: 40px;
    justify-content: start;
    align-items: start;
    padding-left: 38.5px;
    padding-right: 38.5px;
    gap: 40px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
    padding-top: 0px;
    min-height: 90vh;
  }
`;

const LeftColumn = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 154px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 60px;
    width: 100%;
    min-height: 100%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 32px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  max-height: 712px;
  align-self: end;
  animation: 0.3s ${slideDown} ease-in-out forwards;

  @media ${QUERIES.tabletAndSmaller} {
    max-height: max-content;
    max-width: 456px;
    align-self: center;
    animation: 0.3s ${slideDownTablet} ease-in-out forwards;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobileImage = styled(Image)`
  display: none;
  width: 153px;
  height: 223px;
  animation: 0.3s ${slideDownPhone} ease-in-out forwards;
  align-self: center;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 24px;
  font-family: var(--font-primary);
  font-size: ${28 / 16}rem;
  line-height: ${33.6 / 16}rem;
  letter-spacing: 4.72px;
  color: var(--color-white);

  @media ${QUERIES.tabletAndSmaller} {
    align-self: start;
    font-size: ${20 / 16}rem;
    line-height: ${24 / 16}rem;
    letter-spacing: 3.38px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${19.2 / 16}rem;
    letter-spacing: 2.7px;
    gap: 16px;
    align-self: center;
  }
`;

export const TitlePreface = styled.span`
  font-weight: var(--font-weight-bold);
  opacity: 0.25;
`;

export const TitleMain = styled.span`
  font-weight: var(--font-weight-regular);
`;

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 8px;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobilePersonWrapper = styled(PersonWrapper)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    margin-top: 12px;
    gap: 8px;
  }
`;

const roleSlide = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const RoleWrapper = styled.div`
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${32 / 16}rem;
  line-height: ${36.67 / 16}rem;
  color: var(--color-white);
  opacity: 0.5;
  text-transform: uppercase;

  animation: 0.3s ${roleSlide} ease-in forwards;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${24 / 16}rem;
    line-height: ${27.5 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${18.34 / 16}rem;
  }
`;

const nameSlide = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Name = styled.h1`
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${56 / 16}rem;
  line-height: ${64.18 / 16}rem;
  color: var(--color-white);
  text-transform: uppercase;

  animation: 0.5s ${nameSlide} ease-in forwards;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${40 / 16}rem;
    line-height: ${45.84 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${24 / 16}rem;
    line-height: ${27.5 / 16}rem;
  }
`;

const bioSlide = keyframes`
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Bio = styled.p`
  margin-top: 12px;
  max-width: 444px;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  line-height: ${32 / 16}rem;
  color: var(--color-light-blue);

  animation: 0.3s ${bioSlide} ease-in-out forwards;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 8px;
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
    max-width: 458px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: 327px;
    font-size: ${15 / 16}rem;
    line-height: ${25 / 16}rem;
  }
`;

const BulletsWrapper = styled.div`
  margin-top: -34px;
  padding-bottom: 120px;
  display: flex;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 0px;
    margin-top: 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    transition: all 0.3s ease-in-out;
    border-top: 1px solid var(--color-light-blue);
    border-color: ${(p) =>
      p.trigger ? "var(--color-light-blue)" : "transparent"};
    padding-top: 32px;
    margin-top: ${(p) => (p.trigger ? "-32px" : "32px")};
    width: 100%;
    justify-content: center;
    gap: 16px;
  }
`;

const Bullet = styled.button`
  width: 15px;
  height: 15px;
  cursor: pointer;
  border-radius: 50%;

  transition: all 0.3s ease-in-out;
  background-color: var(--color-white);
  opacity: ${(p) => (p.active ? "1" : "0.17")};

  &:focus {
    outline: 3px dotted var(--color-white);
    outline-offset: 4px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 10px;
    height: 10px;
  }
`;

function Crew() {
  const [trigger, setTrigger] = useState(true);
  const [crewPerson, setCrewPerson] = useState(null);
  const [tab, setTab] = useState("Douglas Hurley");

  const pickCrewPerson = (person) => {
    for (let entry of data.crew) {
      if (entry.name === person) {
        return entry;
      }
    }
  };

  useEffect(() => {
    setTrigger(false);
    setCrewPerson(pickCrewPerson(tab));
    const clear = setTimeout(() => {
      setTrigger(true);
    }, 200);

    return () => clearTimeout(clear);
  }, [tab]);

  return (
    <Wrapper>
      <LeftColumn>
        <TitleWrapper>
          <TitlePreface>02</TitlePreface>
          <TitleMain>MEET YOUR CREW</TitleMain>
        </TitleWrapper>

        {trigger ? (
          <PersonWrapper>
            <RoleWrapper>{crewPerson?.role}</RoleWrapper>
            <Name>{crewPerson?.name}</Name>
            <Bio>{crewPerson?.bio}</Bio>
          </PersonWrapper>
        ) : (
          ""
        )}

        {trigger ? (
          <MobileImage
            src={crewPerson ? crewPerson.images.png : ""}
            alt={tab + " image"}
          />
        ) : (
          ""
        )}

        <BulletsWrapper trigger={trigger}>
          {data.crew.map((entry, idx) => {
            if (entry.name === tab) {
              return <Bullet key={idx} active={true} />;
            }
            return (
              <ClickableWrapper
                key={idx}
                onClick={() => {
                  setTab(entry.name);
                }}
              >
                <Bullet />
              </ClickableWrapper>
            );
          })}
        </BulletsWrapper>

        {trigger ? (
          <MobilePersonWrapper>
            <RoleWrapper>{crewPerson?.role}</RoleWrapper>
            <Name>{crewPerson?.name}</Name>
            <Bio>{crewPerson?.bio}</Bio>
          </MobilePersonWrapper>
        ) : (
          ""
        )}
      </LeftColumn>
      {trigger ? (
        <Image
          src={crewPerson ? crewPerson.images.png : ""}
          alt={tab + " image"}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default Crew;

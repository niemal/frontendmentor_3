import styled, { keyframes } from "styled-components";
import data from "../../data.json";
import { QUERIES } from "../constants";
import { useState, useEffect } from "react";
import ClickableWrapper from "../ClickableWrapper";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  display: flex;
  gap: 157px;
  justify-content: center;
  color: var(--color-light-blue);
  transition: all 0.3s ease-in;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 53px;
    flex-direction: column;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 26px;
  }
`;

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImageWrapper = styled.img`
  margin-top: 33px;
  object-fit: cover;
  width: 445px;
  height: 445px;

  transition: all 0.3s ease-in;
  opacity: ${(p) => p.opacity};

  @media ${QUERIES.tabletAndSmaller} {
    width: 300px;
    height: 300px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 170px;
    height: 170px;
    margin-top: 0px;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 20px;
  }
`;

const ContentWrapper = styled(TabWrapper)`
  transition: all 0.3s ease-out;
  opacity: ${(p) => p.opacity};

  @media ${QUERIES.phoneAndSmaller} {
    gap: 32px;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 36px;
  max-width: 445px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 26px;
  }
`;

const NavEntry = styled.button`
  cursor: pointer;
  padding-bottom: 12px;
  letter-spacing: 2.7px;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  line-height: ${19.2 / 16}rem;
  font-size: ${16 / 16}rem;

  transition: all 0.3s ease-in;
  border-bottom: 3px solid transparent;

  ${(p) => (p.isThis ? "border-color: var(--color-white);" : "")}
  color: ${(p) =>
    p.isThis ? "var(--color-white)" : "var(--color-light-blue)"};

  &:focus {
    outline: 3px dotted var(--color-white);
    outline-offset: 4px;
  }

  &:hover {
    ${(p) => (!p.isThis ? "border-color: var(--color-light-blue);" : "")}
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    line-height: ${16.8 / 16}rem;
    letter-spacing: 2.36px;
    padding-bottom: 8px;
  }
`;

const TabTitle = styled.h1`
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${100 / 16}rem;
  line-height: ${114.6 / 16}rem;
  color: var(--color-white);
  text-transform: uppercase;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${80 / 16}rem;
    line-height: ${91.68 / 16}rem;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${56 / 16}rem;
    line-height: ${64.18 / 16}rem;
  }
`;

const TabContent = styled.p`
  color: var(--color-light-blue);
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: ${18 / 16}rem;
  line-height: ${32 / 16}rem;
  max-width: 444px;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 100%;
    width: 100%;
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
    text-align: center;
    border-bottom: 1px solid var(--color-blue);
    padding-bottom: 49px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: 327px;
    font-size: ${15 / 16}rem;
    line-height: ${25 / 16}rem;
    padding-bottom: 32px;
    margin-top: -32px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  border-top: 1px solid var(--color-blue);
  padding-top: 28px;
  gap: 79px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: -32px;
    padding-top: 0px;
    border-top: none;
    width: 100%;
    gap: 11px;
    justify-content: center;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -28px;
    gap: 32px;
    flex-direction: column;
  }
`;

const CellEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 40%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const TopCellEntry = styled.div`
  font-family: var(--font-primary);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-regular);
  line-height: ${16.8 / 16}rem;
  letter-spacing: 2.36px;
  color: var(--color-light-blue);
`;

const BottomCellEntry = styled.div`
  font-family: var(--font-tertiary);
  font-weight: var(--font-weight-regular);
  font-size: ${28 / 16}rem;
  line-height: ${32.09 / 16}rem;
  text-transform: uppercase;
  color: var(--color-white);
`;

function DestinationTabs() {
  const [destination, setDestination] = useState(null);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [tab, setTab] = useState("Moon");

  const pickDestination = (dst) => {
    for (let entry of data.destinations) {
      if (entry.name === dst) {
        return entry;
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDestination(pickDestination(tab));
      setImageOpacity(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <Wrapper>
      <ImageWrapper
        src={destination ? destination.images.png : ""}
        opacity={imageOpacity}
        alt={tab + " image"}
      />
      <TabWrapper aria-describedby={"nav-planet-desc"}>
        <NavWrapper
          aria-label={"Planet navigation panel"}
          aria-describedby={"nav-planet-desc"}
        >
          <VisuallyHidden id={"nav-planet-desc"}>
            Navigate between different destinations: Moon, Mars, Europa, and
            Titan.
          </VisuallyHidden>
          <ClickableWrapper
            onClick={() => {
              setImageOpacity(0);
              setTab("Moon");
            }}
            isThis={tab === "Moon"}
            role={"button"}
            aria-label={"Moon navigation entry"}
          >
            <NavEntry>MOON</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            onClick={() => {
              setImageOpacity(0);
              setTab("Mars");
            }}
            isThis={tab === "Mars"}
            role={"button"}
            aria-label={"Mars navigation entry"}
          >
            <NavEntry>MARS</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            onClick={() => {
              setImageOpacity(0);
              setTab("Europa");
            }}
            isThis={tab === "Europa"}
            role={"button"}
            aria-label={"Europa navigation entry"}
          >
            <NavEntry>EUROPA</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            onClick={() => {
              setImageOpacity(0);
              setTab("Titan");
            }}
            isThis={tab === "Titan"}
            role={"button"}
            aria-label={"TItan navigation entry"}
          >
            <NavEntry>TITAN</NavEntry>
          </ClickableWrapper>
        </NavWrapper>
        <ContentWrapper opacity={imageOpacity}>
          <TabTitle>{destination?.name}</TabTitle>
          <TabContent>{destination?.description}</TabContent>

          <BottomRow>
            <CellEntry>
              <TopCellEntry>AVG. DISTANCE</TopCellEntry>
              <BottomCellEntry>{destination?.distance}</BottomCellEntry>
            </CellEntry>

            <CellEntry>
              <TopCellEntry>EST. TRAVEL TIME</TopCellEntry>
              <BottomCellEntry>{destination?.travel}</BottomCellEntry>
            </CellEntry>
          </BottomRow>
        </ContentWrapper>
      </TabWrapper>
    </Wrapper>
  );
}

export default DestinationTabs;

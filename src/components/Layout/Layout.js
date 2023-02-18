import Navbar from "../Navbar";
import { QUERIES } from "../constants";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  height: 100%;
  width: 100%;

  ${(p) =>
    p.home
      ? `
    background-image: url(${data.basePath}/assets/home/background-home-desktop.jpg);
    background-size: 100% 125%;
    background-repeat: no-repeat;
    background-attachment: scroll, local;

    @media ${QUERIES.tabletAndSmaller}  {
      background-image: url('${data.basePath}/assets/home/background-home-tablet.jpg');
      background-size: 100% 88%;
    }
    @media ${QUERIES.phoneAndSmaller} {
      background-image: url('${data.basePath}/assets/home/background-home-mobile.jpg');
      background-size: 100% 100%;
    }
  `
      : ""};

  ${(p) =>
    p.destination
      ? `
    background-image: url(${data.basePath}/assets/destination/background-destination-desktop.jpg);
    background-size: 100% 125%;
    background-repeat: no-repeat;
    background-attachment: scroll, local;

    @media ${QUERIES.tabletAndSmaller}  {
      background-image: url('${data.basePath}/assets/destination/background-destination-tablet.jpg');
      background-size: 100% 100%;
    }
    @media ${QUERIES.phoneAndSmaller} {
      background-image: url('${data.basePath}/assets/destination/background-destination-mobile.jpg');
    }
  `
      : ""};

  ${(p) =>
    p.crew
      ? `
    background-image: url(${data.basePath}/assets/crew/background-crew-desktop.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media ${QUERIES.tabletAndSmaller}  {
      background-image: url('${data.basePath}/assets/crew/background-crew-tablet.jpg');
      background-size: 100% 110%;
    }
    @media ${QUERIES.phoneAndSmaller} {
      background-image: url('${data.basePath}/assets/crew/background-crew-mobile.jpg');
    }
  `
      : ""};

  ${(p) =>
    p.technology
      ? `
    background-image: url(${data.basePath}/assets/technology/background-technology-desktop.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media ${QUERIES.tabletAndSmaller}  {
      background-image: url('${data.basePath}/assets/technology/background-technology-tablet.jpg');
    }
    @media ${QUERIES.phoneAndSmaller} {
      background-image: url('${data.basePath}/assets/technology/background-technology-mobile.jpg');
      background-attachment: scroll;
    }
  `
      : ""};
`;

function Layout() {
  let location = useLocation();

  return (
    <Wrapper
      home={location.pathname === "/"}
      destination={location.pathname === "/destination"}
      crew={location.pathname === "/crew"}
      technology={location.pathname === "/technology"}
    >
      <Navbar />

      <Outlet />
    </Wrapper>
  );
}

export default Layout;

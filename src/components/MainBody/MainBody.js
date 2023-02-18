import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import Destination from "../Destination";
import Crew from "../Crew";
import Technology from "../Technology";
import styled from "styled-components";

const Wrapper = styled.main`
  height: 100%;
  overflow: hidden;
`;

function MainBody() {
  return (
    <Wrapper>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"destination"} element={<Destination />} />
          <Route path={"crew"} element={<Crew />} />
          <Route path={"technology"} element={<Technology />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default MainBody;

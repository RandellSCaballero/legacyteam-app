import React from "react";
import Navbar from "./components/Navbar";
import SectionTeam from "./components/SectionTeam"
import SectionHonorable from "./components/SectionHonorable"
import SectionPlayer from "./components/SectionPlayer"
import SectionFooter from "./components/SectionFooter"
import SeparateSection from "./components/SeparateSection";

function App() {
  return (
    <>
      <Navbar/>
      <SectionTeam/>
      <SeparateSection/>
      <SectionPlayer/>
      <SeparateSection/>
      <SectionHonorable/>
      <SectionFooter/>
    </>
  );
}

export default App;
"use client";

import { useEffect } from "react";
import HomeFirstSection from "@/components/HomeFirstSection";
import HomeSecondSection from "@/components/HomeSecondSection";
import HomeThirdSection from "@/components/HomeThirdSection";
import HomeFourthSection from "@/components/HomeFourthSection";
import HomeFiveSection from "@/components/HomeFiveSection";
import HomeSixSection from "@/components/HomeSixSection";

export default function Page() {
  useEffect(() => {
    document.title = "Hair Stage Re:birth｜京都市伏見区醍醐のサロン";
  }, []);

  return (
    <main className="bg-white text-black">
      <HomeFirstSection />
      <div id="full-wrapper">
        <div id="content" className="wide w-full">
          <HomeSecondSection />
          <HomeThirdSection />
          <HomeFourthSection />
          <HomeFiveSection />
          <HomeSixSection />
        </div>
      </div>
    </main>
  );
}

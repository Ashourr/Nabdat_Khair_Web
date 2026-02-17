"use client";
import About from "./about/About";
import OurStory from "./ourStory/OurStory";
import History from "./history/History";
import OurMission from "./OurMission/OurMission";
import StatisticsSection from "@/components/statistics/StatisticsSection";
import Team from "./team/Team";
import SliderAbout from "./sliderAbout/SliderAbout";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale, useTranslations } from "next-intl";
export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page")}
        link={t("link-page")}
        suptitle={t("suptitle-page")}
      />
      <About />
      <OurStory />
      <History />
      <OurMission />
      <StatisticsSection />
      <SliderAbout />
      <Team />
    </>
  );
}

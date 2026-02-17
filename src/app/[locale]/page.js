import AboutHome from "@/components/about/aboutHome/AboutHome";
import Articles_section from "@/components/articles/articlesSection/Articles_section";
import Cases_section from "@/components/cases/casesSection/Cases_section";
import Fqa_section from "@/components/faq/Fqa_section";
import Foundation_section from "@/components/foundation/foundationSection/Foundation_section";
import Header from "@/components/header/Header";
import Page_links from "@/components/page_links/linkPageSection/Page_links";
import Review_section from "@/components/review/Review_section";
import Services_section from "@/components/services/servicesSection/Services_section";
import Slider from "@/components/SliderHome/Slider";
import StatisticsSection from "@/components/statistics/StatisticsSection";
import Video from "@/components/Video/Video";
import Contact_section from "@/components/contact/Contact_section";
export default function page() {
  return (
    <>
      <Header />
      <Slider />
      <AboutHome />
      <Page_links />
      <Foundation_section />
      <Services_section />
      <Cases_section />
      <StatisticsSection />
      <Articles_section />
      <Video />
      <Review_section />
      <Fqa_section />
      <Contact_section />
    </>
  );
}

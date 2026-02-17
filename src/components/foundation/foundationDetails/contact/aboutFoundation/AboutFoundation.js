import "./aboutFoundation.css";
import AboutF from "./aboutF/AboutF";
import Timeline from "./timeline/Timeline";
import Vision from "./vision/Vision";
import OurGoals from "./ourGoals/OurGoals";
import Team from "./team/Team";
import FaqFoundation from "./faqFoundation/FaqFoundation";
import PlatformStatistics from "./PlatformStatistics/PlatformStatistics";
import SilderReview from "./silderReview/SilderReview";
export default function AboutFoundation() {
  return (
    <div className="aboutFoundation">
      <AboutF />
      <Timeline />
      <Vision />
      <OurGoals />
      <PlatformStatistics />
      <SilderReview />
      <FaqFoundation />
      <Team />
    </div>
  );
}

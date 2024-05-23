import type { Metadata } from "next";
import Slider from "@/components/Slider/Carousel";


export const metadata: Metadata = {
  title: "Highrise Construction Solutions | Home",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};

function Home() {
  return (
    <main>
      <Slider />
    </main>
  );
}
export default Home;
import type { Metadata } from "next";
import Slider from "@/components/Slider/Carousel";
import HomeAboutCardUI from "@/components/Cards/HomeAboutCardUI/Index";
import Hero from "@/components/Hero/Home/Hero";


export const metadata: Metadata = {
  title: "Home | Highrise Construction Solutions",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};

function Home() {
  return (
    <main>
      <Hero image_url={"/assets/new-york-skyline-black-and-white-lucynakoch.jpg"} />
      <Slider />
      <HomeAboutCardUI image_url={"/assets/group_image.png"} />
    </main>
  );
}
export default Home;
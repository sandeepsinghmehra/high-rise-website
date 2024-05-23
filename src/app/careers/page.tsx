import CareerHero from "@/components/Hero/Careers/Hero";
import { Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highrise Construction Solutions | Careers",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};

export default function Careers() {
  return (
    <main>
        <CareerHero image_url={"/assets/Highrise+Logo+color+large.jpg"} />
    </main>
  );
}

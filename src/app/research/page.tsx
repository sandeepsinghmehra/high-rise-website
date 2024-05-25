import CustomCardResearch from "@/components/Cards/ResearchCardUI/Index";
import { Typography } from "@mui/material";
import type { Metadata } from "next";
import PageTitle from "./components/PageTitle";

export const metadata: Metadata = {
  title: "Research",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};
export default function Research() {

  return (
    <main>
      <PageTitle />
      <CustomCardResearch
        title={""} 
        description={`The construction industry is known for its slow adaptation to the Industrial Revolution 4.0. This revolution refers to using AI techniques in the construction management process. However, it can be assumed that the development of such software will be introduced in the next decade because of the dramatic enhancement of AI systems. High Rise Construction Solutions tends to dedicate its effort to pushing the conventional boundaries of management systems. Our research showcases experimental outcomes of using large language models on construction drawings of various sizes. 

        Infrastructure development is a significant societal aspect involving manual and redundant tasks. As construction is a delicate process, the management team collaborates with multiple authorities, such as the municipal corporation, fire department, owners, stakeholders, and most notably, the design team. To ensure the process is followed based on the building codes specific to the location and specified by the Municipal Corporation guidelines, there is a constant interaction between the design team and the contractor. Unfortunately,  big projects have a greater scope for mistakes, and these contingencies must be addressed per the building codes. `} 
        image_url={"/assets/research/juned.jpg"} 
      />
      <CustomCardResearch 
        title={""} 
        description={"The drawings and the sequence are updated regularly to ensure that after the project, the contractor can provide the owner with accurate drawings for the entire superstructure. Large Language Models can perform these redundant tasks with proper training, logic implementation, and prompt engineering methods. Through this research, High Rise Construction Solutions will attempt to dive into the cardinal aspects of construction automation using machine learning, RAG, Vector databases, and other available resources to deploy robust software for construction management. Generative AI has a huge potential to make redundant processes such as estimating take-offs, creating proposals, and tracking inventory."} 
        image_url={"/assets/research/secondImg.png"} 
        directionImage={'row-reverse'}
      />
    </main>
  );
}

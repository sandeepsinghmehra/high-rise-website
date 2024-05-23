import CustomCardProject from "@/components/Cards/ProjectCardUI/Index";
import { Box, Typography } from "@mui/material";
import type { Metadata } from "next";
import PageTitle from "./components/PageTitle";

export const metadata: Metadata = {
  title: "Highrise Construction Solutions | Projects",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};


export default function Projects() {
  return (
    <main>
      <Box component="section">  
          <PageTitle title={"High Rise Construction Solutions Projects"} />
          <CustomCardProject 
            title1={"NY VUE"} 
            title2={"100 Chosin Few Way Bayonne, NJ "} 
            description={"Highrise Construction Solutions Inc. is contracted for a 26-story residential tower building ground up construction project. 377,569 SF Building with 281 Apartment Units along with six- level parking garage with a total of 566 parking space. "}
            image_url={"/assets/project/ny-vue-tower-bayonne.jpg"}  
          />
          <CustomCardProject
            title1={"95 Wall"} 
            title2={"95 Wall Street New York, NY 10003"} 
            description={"Highrise Construction Solutions Inc. is in contract with UDR to renovate all 503 apartments at 95 Wall Street New York, NY 10005.  The project is set to mobilize this fall and duration of the project will be 3 years. The building is to remain operational during renovation. "}
            image_url={"/assets/project/95wall_new_york.jpg"} 
            directionImage={'row-reverse'}
          />
          <CustomCardProject
            title1={"99 Hotel"} 
            title2={"99 Glen Street Glen Cove, NY"} 
            description={"Highrise Construction Solutions Inc. is working as a Construction Manager and Owner's Representative for a 7-Story Ground up construction project of a Boutique Hotel with Holiday Inn Flagship at 99 Glen Street, Glen Cove, NY. The Hotel will boast state of the art amenities incl. an outdoor rooftop lounge, a fitness room, conference rooms and a cafe. The construction is set to begin in the final quarter of 2023."}
            image_url={"/assets//project/99hotel.jpg"} 
          />
          <CustomCardProject
            title1={"166 Van Reipen Ave"} 
            title2={"166 Van Reipen Avenue, Jersey City, NJ 07306"} 
            description={"Highrise Construction Solutions Inc. is in contract with developers Manchanda Group LLC for a ground up construction project located at 166 Van Reipen Avenue, Jersey City, New Jersey. The ground breaking ceremony for this 13-Story Complex will be held on May 24th, 2023. The Project has 196 units with retail space on the first floor and features amenities such as a rooftop pool, common area with kitchenettes, gym, and conference rooms.  This project is scheduled for completion in a 24 Month duration."}
            image_url={"/assets/project/166van-ave-jersey-city.jpg"} 
            directionImage={'row-reverse'}
          />
          <CustomCardProject
            title1={"SINGH TOWER"} 
            title2={"622-628 Summit Avenue, Jersey City, NJ 07306"} 
            description={"Highrise Construction Solutions Inc. is in Contract with Developers GN Management Inc. for a Ground up Construction Project located at 622 Summit Avenue, Jersey City, New Jersey. The Ground Break ceremony for this 28-Story Complex was held on July 20th, 2022. The Project is approximately valued at 80 Million Dollars and is scheduled for completion in a 36 Month Duration."}
            image_url={"/assets/project/singh_tower.jpg"} 
          />
          <CustomCardProject
            title1={"161 VAN WAGENEN RESIDENTIAL DEVELOPMENT"} 
            title2={"161 Van Wagenen, Jersey City, New Jersey 07306"} 
            description={"Highrise Construction Solutions Inc. is currently in contract with G.N. Management/ 161 Van Wagenen LLC. as a General Contractor for the 161 Van Wagenen Apartments Project. This 13 Story Multi-Family Residential Complex will have 124 Apartment Units with a net area of construction at approximately 128,000 Square feet. The Basis of Design for the building is a concrete structure and the facade is Brick Veneer with glass windows. The complex will boast state of the art amenities like an automated parking system, swimming pool and a gym. The project is currently valued at approximately 30 Million Dollarss"}
            image_url={"/assets/project/161-van-wagenen-jersey-city.jpg"} 
            directionImage={'row-reverse'}
          />
          <CustomCardProject
            title1={"Interior Lobby Renovation"} 
            title2={"10 Hanover Square New York, NY 10005"} 
            description={"Highrise Construction Solutions is currently in contract with UDR Inc. as a General Contractor for the interior lobby renovation for the project located at 10 Hanover Square, New York. The scope of the project includes (but is not limited to) demolition, site preparation, supply and installation of millwork, supply and installation of glass panels, supply and installation of Corian panels, supply and installation of lighting fixtures, supply and installation of mailboxes, plumbing and renovation of WC, installation of new ceiling, supply and installation of fire alarms and sprinklers and supply and installation of new HVAC diffusers as specified by the architectural drawings."}
            image_url={"/assets/project/interior_lobby_renovation.png"} 
          />
          <CustomCardProject
            title1={"GARRISON SQUARE ENCLOSURE REPAIR"} 
            title2={"32 Garrison Square, Boston, MA"} 
            date={' April 2022 - July 2022'}
            description={"Highrise Construction Solutions Inc. was in contract with UDR Garrison Square LLC. for an exterior remediation project at 32 Garrison Street, Boston, Massachusetts. The scope of work included remediation including but not limited to Facade Repointing, Concrete Patching, Roofing, Shingle Replacement, Courtyard Paver and Walkway wall Rebuild at 30-50 Garrison and the Landmark Building at 56 Botolph Street, Boston, MA."}
            image_url={"/assets/project/garrison_square.png"}
            directionImage={'row-reverse'}
          />
          <CustomCardProject
            title1={"New Ground up Construction Four Points by Sheraton, Long Island City "} 
            title2={"39th Ave, Long Island City, NY 11101"} 
            description={"Highrise Construction Solutions worked as a General Contractor for the project located at 39th Ave, Long Island City, NY 11101. The approximate net area of construction for the project was 50,000 sqft. The scope of the project included (but was not limited to) construction of 88 rooms, lobby, and roofing. "}
            image_url={"/assets/project/new_ground_up.jpg"} 
          />
        </Box>
    </main>
  );
}


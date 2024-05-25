import type { Metadata } from "next";
import CardUI from "@/components/Cards/MeetTheTeamCardUI/Index";
import { Circle as CircleIcon,  } from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "About",
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
};

const whoWeAreData = [
  'Ground-Up Construction',
  'Design-Build',
  'Remodels and Renovations',
  'Period Restorations',
  'Hardscape/ Landscape',
  'Other specialty projects in the New York/ New Jersey Area.',
];
const missionData = [
  'Providing high quality workmanship and customer service.',
  'Maintaining professionalism and honesty in our relationships with clients, vendors and subcontractors.',
  'Critically applying sound project management principles to coordinate day to day activities.',
  'Bringing experienced subcontractors to each project with a shared goal of delivering work ahead of schedule and under budget.',
  'Creating a safe and productive work environment. satisfaction.',
];
const teamDataList = [
  {
      id: '1',
      name: 'Juned Qazi',
      jobDescription: 'Principal',
      imgUrl: "assets/team_members/juned_qazi.jpg",
  },
  {
      id: '2',
      name: 'David Lim P.E',
      jobDescription: 'Project Executive',
      imgUrl: "assets/team_members/david_lim.jpg",
  },
  {
      id: '3',
      name: 'Adnan Aziz Mohammed',
      jobDescription: 'Finance Manager',
      imgUrl: "assets/team_members/adnan_aziz.jpg",
  },
  {
      id: '4',
      name: 'Nensi Sukhadia',
      jobDescription: 'Accountant',
      imgUrl: "assets/team_members/nensi_sukhadia.jpeg",
  },
  {
      id: '5',
      name: 'Anthony DeRogatis',
      jobDescription: 'Advisor',
      imgUrl: "assets/team_members/anthony_derogatis.jpeg",
  },
  {
      id: '6',
      name: 'Marius Mazur',
      jobDescription: 'Senior Project Manager',
      imgUrl: "assets/team_members/marius_mazur.jpg",
  },
  {
      id: '7',
      name: 'Sloan Delfi',
      jobDescription: 'Project Manager',
      imgUrl: "assets/team_members/sloan_delfi.jpg",
  },
  {
      id: '8',
      name: 'Devinder Singh',
      jobDescription: 'Project Manager',
      imgUrl: "assets/team_members/devinder_singh.jpg",
  },
  {
      id: '9',
      name: 'Anmol Pant',
      jobDescription: 'Project Manager',
      imgUrl: "assets/team_members/anmol_pant.jpg",
  },
  {
      id: '10',
      name: 'Lloyd Durgadeen',
      jobDescription: 'Construction Superintendent',
      imgUrl: "assets/team_members/lloyd_durgadeen.jpg",
  },
  {
      id: '11',
      name: 'Jim Lyden',
      jobDescription: 'Construction Superintendent',
      imgUrl: "assets/team_members/jim_lyden.jpg",
  },
  {
      id: '12',
      name: 'Faizan Ahmed',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/faizan_ahmed.jpg",
  },
  {
      id: '13',
      name: 'Santo Guinta',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/santo_guinta.jpg",
  },
  {
      id: '14',
      name: 'Lava Kumar',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/lava_kumar.jpg",
  },
  {
      id: '15',
      name: 'Sunnan Siddique',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/sunnan_siddique.jpg",
  },
  {
      id: '16',
      name: 'Kenneth Sisk',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/kennet_sisk.jpg",
  },
  {
      id: '17',
      name: 'Shashidhar Bontha',
      jobDescription: 'Assistant Project Manager',
      imgUrl: "assets/team_members/Shashidhar_bontha.jpg",
  },
  {
      id: '18',
      name: 'Luis Hernandez',
      jobDescription: 'Assistant Construction Superintendent',
      imgUrl: "assets/team_members/luis_hernandez.jpg",
  },
  {
      id: '19',
      name: 'Danish Hassan',
      jobDescription: 'Assistant Construction Superintendent',
      imgUrl: "assets/team_members/danish_hassan.jpeg",
  },
];

export default function About() {
  return (
    <main>
      <Box component="section" sx={{ p: "60px 30px" }}>
          <Typography gutterBottom variant="h3" component="div" margin={5} align='left' height={60}>
            Who We Are
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" fontSize={18} sx={{ p: "10px 80px" }}>
              Highrise Construction Solutions Inc. is a Construction Company with over 25 years of experience in the Construction Management and General Contracting domain. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring the budget within set constraints. HRCS collaborates with Homeowners, Developers, Architects, Designers, and Engineers to schedule and put together all phases of the Construction Process. Our team is dedicated to the highest standards of professionalism and client satisfaction. We offer Construction Management and Consulting Services for Residential and Commercial Construction projects; including but not limited to:
          </Typography>
          <List sx={{ width: {xs: '100%', md:'80%'}, p: "10px 120px", bgcolor: 'background.paper' }}>
            {whoWeAreData.map((value) => (
              <ListItem
                key={value}
                disableGutters
              >
                <ListItemIcon >
                  <CircleIcon sx={{fontSize: '3'}} />
                </ListItemIcon>

                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
          </List>
      </Box>

        <Box component="section" sx={{ p: "60px 30px" }}>
          <Typography gutterBottom variant="h3" component="div" margin={5} align='left' height={60}>
            Our Mission
          </Typography>

          <List sx={{ width: {xs: '100%', md:'80%'}, p: "10px 80px", bgcolor: 'background.paper' }}>
            {missionData.map((value) => (
              <ListItem
                key={value}
                disableGutters
              >
                <ListItemIcon >
                  <CircleIcon sx={{fontSize: '3'}} />
                </ListItemIcon>

                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
          </List>
      </Box>
      <Box component="section" sx={{ p: "60px 30px" }}>
        <Typography gutterBottom variant="h3" component="div" margin={5} align='center' height={60}>
            Meet the Team
        </Typography>
        <Stack 
            direction="row" 
            useFlexGap 
            flexWrap="wrap"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={8}
            sx={{ width: '100%'}}
        >
            
          {
            teamDataList.map((teamMemberInfo)=>(
            <CardUI 
                key={teamMemberInfo.id}
                id={teamMemberInfo.id}
                name={teamMemberInfo.name}
                description={teamMemberInfo.jobDescription}
                imageUrl={teamMemberInfo.imgUrl}
            />
        ))
          }
        </Stack>
      </Box>
    </main>
  );
}

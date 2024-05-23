"use client"
import React, { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Link as MuiLink, Skeleton, Toolbar, styled, useTheme } from "@mui/material";
import { Close, DarkModeRounded, LightModeOutlined, LinkedIn, Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import { useThemeToggle } from "@/components/theme/ThemeProvider";


const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  transition: 'color 0.3s ease, background-color 0.3s ease',
}));

const Logo = styled(Image)({
  height: 80,
  width: 120,
});

export function  Header(){
  const pathName = usePathname();
  const theme:any = useTheme();
  const toggleTheme:any = useThemeToggle();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data:any[] = [
      {
        href: `/`,
        label: "Home",
        active: pathName === `/`
      },{
        href: `/about`,
        label: "About",
        active: pathName === `/about`
      },
      {
        href: `/projects`,
        label: "Projects",
        active: pathName === `/projects`
      },{
        href: `/careers`,
        label: "Careers",
        active: pathName === `/careers`
      },{
        href: '/services',
        label: "Our services",
        active: pathName === `/services`
      },{
        href: '/research',
        label: "Research",
        active: pathName === '/research'
      }
  ]
  const handleMobileMenu:any = () => {
    setIsMobileMenuOpen(true);
  }
  const handleMobileMenuClose:any = () => {
    setIsMobileMenuOpen(false);
  }
  return (
      <> 
        <Box sx={{flexGrow: 1}} height={"8rem"}>
          <AppBar position='static' 
            sx={{ bgcolor: theme.palette.mode === 'light' ? "#fff": "#000" }}
          >
            <Toolbar>
              {/* <Logo 
                src={companyLogo} 
                alt="HighRise" sx={{
                  height: {xs: 50, md: 80},
                  width: {xs: 60, md: 100},
                }} 
                // onClick={() => navigate("/")} 
              /> */}
              <Box>
                <Link href={'/'}>
                  <Logo
                    src={"/assets/logo4.png"}
                    alt={"High Rise Logo"}
                    width={100}
                    height={70}
                  />
                </Link>
              </Box>
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton 
                  sx={{ color: '#000' }}
                  onClick={handleMobileMenu}
                >
                  <Menu />
                </IconButton>
              </Box>

              {!isMobileMenuOpen && AllMenus(data) }
              {isLoading ? <Skeleton /> : (
            <Drawer 
              open={isMobileMenuOpen} 
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                    width: '50%',
                    maxHeight: '100vh', // ensures it takes full screen height if needed
                },
            }}
            >
               <Box
                sx={{
                    // width: '100%',
                    height: '100%', // ensure the content takes full height of the drawer
                    p: 2,
                }}
            >
              {/* <Logo 
                src={companyLogo} 
                alt="HighRise" 
                sx={{
                  height: {xs: 50, md: 80},
                  width: {xs: 60, md: 100},
                }} 
                // onClick={() => navigate("/")} 
              /> */}
              <Box>
                <Link href={'/'}>
                  <Logo
                    src={"/assets/logo4.png"}
                    alt={"High Rise Logo"}
                    width={50}
                    height={50}
                  />
                </Link>
              </Box>
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton 
                onClick={toggleTheme} 
                sx={{ position: 'absolute', top: 10, right: 70}}>
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton sx={{ position: 'absolute', top: 10, right: 10}} onClick={handleMobileMenuClose}>
                  <Close />
                </IconButton>
              </Box>
              
              {AllMenusForMobile(data) }
            </Box>   
            </Drawer>
          )}
            </Toolbar>
          </AppBar>
          
        </Box>
     </>
    )
}
const AllMenus = (data) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  
  return (
    <Box sx={{display: { xs: 'none', sm: 'none', md:'flex'}, flexDirection: 'row', alignContent: "center", alignItems: "center", padding: "2rem"}}>
                {data.map((route, index)=> (
                  <NavItem
                    key={index}
                    href={route.href}
                    title={route.label}
                    active={route.active}
                  />
                ))}

                <IconButton 
                  onClick={toggleTheme}
                >
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
                <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font sizesx
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton>
                <Button 
                  variant="contained"  
                  href="mailto:office@hill21construction.com"  
                  sx={{
                    height: '60px',
                    bgcolor: "contained",
                    color: theme.palette.mode === 'light' ? "#000": "#fff",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
  )
}
const AllMenusForMobile = (data) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  return (
    <Box sx={{display: { xs: 'flex', md:'none'}, flexDirection: 'column', alignContent: "center", alignItems: "center", padding: ".5rem"}}>
      
      {data.map((route, index)=> (
                  <NavItem
                    key={index}
                    href={route.href}
                    title={route.label}
                    active={route.active}
                  />
                ))}
                <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font size
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton>
                <Button 
                  variant="contained" 
                  fullWidth 
                  href="mailto:office@hill21construction.com"  
                  sx={{
                    height: '60px',
                    bgcolor: 'contained',
                    color: theme.palette.mode === 'light' ? "#000": "#fff",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
  )
}
const NavItem = ({ title, active, href }) => {
    return (
        <CustomLink 
          href={href}
          sx={{
            textDecoration: active ? 'underline' : 'none', 
            textUnderlineOffset: active ? '5px': 'none',
            cursor: `url(${"/assets/hemmar4.png"}), pointer`,
          }}  
        >{title}</CustomLink>   
    )
}
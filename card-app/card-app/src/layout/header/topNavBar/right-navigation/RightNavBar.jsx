import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton,   } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import NotLogged from "./NotLogged";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMenu } from "../menu/MenuProvider";
import useUsers from "../../../../users/hooks/useUsers";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchAppBar from "./SearchAppBar";







export default function RightNavBar() {
  const { isDark, toggleDarkMode,  } = useTheme();
  
  const setOpen = useMenu();




 
  
  const { user } = useUser();


  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    
  };




  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },}}>

        <SearchAppBar/>

        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      

        {user && ( <IconButton sx={{ ml: 1 }}   onClick={onLogout}>
          <LogoutIcon/>
          </IconButton>
          )}

        <IconButton sx={{ ml: 1 }}   
        onClick={() => setOpen(true)} >

           <MoreVertIcon   />
          </IconButton> 
          
       

         
          </Box>
          

        
           <MoreButton />

           

      </>



  );
}

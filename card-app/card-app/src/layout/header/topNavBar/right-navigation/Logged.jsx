import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {  useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";
import { Box } from "@mui/material";


const Logged = () => {
  const navigate = useNavigate ();
  
  return (
    <Box>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
          
           onClick= {() => navigate (ROUTES.USER_PROFILE)}
         
        
      >
        <Avatar alt="Bird" src="/assets/images/avatar.png" />

        
      </IconButton>

    </Box>
    
      
  );
};

export default Logged;

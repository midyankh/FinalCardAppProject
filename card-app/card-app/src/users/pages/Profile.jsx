import React, { useEffect, useState } from 'react'
import useUsers from '../hooks/useUsers'
import { Avatar, Card, Container, Divider, Typography } from '@mui/material'
import PageHeader from '../../components/PageHeader'
import { useTheme } from '../../providers/ThemeProvider';
import Map from "../../sandbox/map/Map";
import { useUser } from '../providers/UserProvider';



export default function Profile() {
  const {handleGetUser,error}=useUsers();
  const [userData, setUser] = useState();
  const {user}= useUser();
  
 
  useEffect(()=>{
    const getUserData=async()=>{
      setUser(await handleGetUser());
    };
   getUserData();
  },[]);

  const {isDark} = useTheme();

  return (
    <div>
      {userData? (
      <Container
      sx={{
        color: isDark? "white" : "primary",
      }}
      >
        <Container>
          <PageHeader
          title={userData.name.first}
          subtitle='Here you can find all the details about your Profile'
          />
          </Container>
  
        <Container
          sx={{pt: 5,
          pb:7,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: isDark?"white" : "primery",
           }}
        >
  
            {user&& (
            <Card
             sx={{
              width: "800px",
              minHeight: "650",
              boxShadow: 100,
              borderRadius: 3,
            }} 
            >
            <Container
              sx={{
                pt:5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: isDark? "white" : "primery",
              }}
            >
                <Avatar
                sx={{height: "200px", width: "200px", marginBottom: 1 }}
                src='../../../assets/images/Avatar.png'
                alt={user.alt}
                />
                </Container>
                <Divider variant='fullWidth' sx={{margin:2 }}/>
                <Container
                sx={{
                  pt:2,
                  pb:5,
                  display: "-ms-inline-flexbox",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: isDark ? "white" : "primery",
                }}
                >
                  <Typography sx={{fontSize:20}}>
                     <strong>Name:</strong> <br/>
                     {userData.name.first}
                     </Typography>
                  <br/>
                  <Typography>
                    <strong>Phone Number:</strong> <br/>
                    {userData.phone}
                  </Typography>
                  <br/>
                  <Typography>
                    <strong>Email:</strong> <br/>
                    {userData.email}
                  </Typography>
                  <br/>
                  <Typography>
                    <strong>Website:</strong> <br/>
                    {userData.web}
                  </Typography>{" "}
                  </Container>
                <Container 
                   sx={{
                    width: "80%",
                    height:"580px", 
                    pb:5,   
                  }}
                  >
                   <Map
                     center={[51.505, -0.09]}
                     zoom={13}
                     adress={`${userData.city} ${userData.street} ${userData.houseNumber}`}
                    />
                    </Container>
                    </Card>
            )}
            </Container>
            </Container>
      ) : (
        error?.message
      )}
      </div>
  );
}
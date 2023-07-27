import { Avatar, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Map from "../../sandbox/map/Map";
import { makeFirstLetterCapital } from "../../forms/utils/algoMethods";


export default function CardDetailsPage() {
  const { id } = useParams();
  const {handleGetCard, value:{card}}=useCards();

  useEffect(()=>{
    handleGetCard(id);
  },[handleGetCard, id])

  return (
    
  
    <Container>
      {card&&
        <PageHeader
        title={`${makeFirstLetterCapital(card.title)} Card Details`}
        subtitle={`Here you can find all the dateils about the ${card.title} card`}
      />
      }
    
      
      {card&&
      <Container sx={{display: {md: "flex", xs: "block"}, }}
      >
      <Container sx={{
        paddingTop:2,
        width:"100%"
      }}
      >
        <Avatar sx={{ marginBottom:1}} src={"/"+card.image.url} alt={card.image.alt}/>
        <Divider variant="fulWidth" sx={{margin:2}}/>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Title:</ins>{card.title}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Subtitle:</ins>{card.subtitle}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Description:</ins>{card.description}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Phone Number:</ins>{card.phone}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Email:</ins>{card.email}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Website:</ins>{card.web}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>State:</ins>{card.address.state}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Country:</ins>{card.address.country}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Street:</ins>{card.address.street}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>House Number:</ins>{card.address.houseNumber}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>City:</ins>{card.address.city}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Zip Code:</ins>{card.address.zip}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>Biz Number:</ins>{card.bizNumber}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>UserID:</ins>{card.user_id}</Typography>
        <Typography sx={{frontSize:"18px"}}><ins style={{frontSize:"20px"}}>CardID:</ins>{id}</Typography>


    </Container>
    <Container sx={{margin: 4 , width:"100%", height:"300px"}}>
      <Map
      center={[51.505, -0.09]}
      zoom={13}
      address= {card&& `${card.address.city} ${card.address.street} ${card.address.houseNumber}`}
      />
    </Container>

    </Container>
    }


    </Container>

  );
  
}

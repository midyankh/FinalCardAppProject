import { Container, Fab } from "@mui/material";
import React, { useEffect} from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import ROUTES from "../../routes/routesModel";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } = useCards();
  const {  error, isLoading , filterCards} = value;
  
  const navigate= useNavigate();

 useEffect(() => {
    handleGetCards();
  }, [handleGetCards]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };

  const handleLike = async(id) =>{
    await handleLike(id);
  };


  

  return (
    <div>
      <Container sx={{ mt: 0 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          filterCards={filterCards}
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
          handleLikeCard={handleLikeCard}
         
          
        />
        
          <Fab
            onClick={() => navigate(ROUTES.CREATE_CARD)}
            color="primary"
            aria-label="add"
            sx={{ position: "absolute", bottom: 160, right: 12 }}
          >
            <AddIcon />
          </Fab>
        
      </Container>
    </div>
  );
}

import { Container } from '@mui/material';
import React, { useCallback, useEffect } from 'react'
import useCards from '../hooks/useCards';
import PageHeader from '../../components/PageHeader';
import CardsFeedback from '../components/CardsFeedback'



const FavCardsPage = () => {
   const { value, handleDeleteCard , handleGetFavCards, handleLikeCard } = useCards ();
   const {isLoading, error , cards, filterCards} = value;
  
    useEffect (() => {
      handleGetFavCards();
      
    }, []);
  
    const onDeleteCard = useCallback(
      async (cardId)=> {
        await handleDeleteCard(cardId);
        await handleGetFavCards();
      },
      [handleDeleteCard,handleGetFavCards]
    );
  
      const handleLike = async (id) => {
        await handleLikeCard(id);
      };
  
    return (
      <Container>
        <PageHeader
          title="Favorite Cards Page Here"
          subtitle= " Here you can find all your favorite cards"
          />
          <CardsFeedback
          isloading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={onDeleteCard}
          handleLike={handleLike}
          />
      </Container>
    );
  
  };

export default FavCardsPage;
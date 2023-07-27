import { Typography } from "@mui/material";
import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

import {  func, object } from "joi";
import { arrayOf, bool, string } from "prop-types";

export default function CardsFeedback ({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLikeCard,
 
})
 {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error.message} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) return <Cards cards={cards} handleDelete={handleDelete} handleLikeCard={handleLikeCard} />
  return null;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  handleDelete: func.isRequired,
  handleLikeCard: func.isRequired,
  
};




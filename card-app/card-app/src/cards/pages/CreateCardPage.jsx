import React, { useEffect } from 'react'
import { useUser } from '../../users/providers/UserProvider'
import useCards from '../hooks/useCards';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/joi-schema/cardSchema';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import CardForm from '../components/CardForm';
import useForm from '../../forms/hooks/useForm';
import normalizeCard from '../helpers/normalization/normalizeCard';

export default function CreateCardPage() {
  const {user} = useUser();
  const {handleCreateCard}= useCards();
  const { setData, data, errors,...rest}= useForm(

    initialCardForm,cardSchema,
    () => {handleCreateCard({
      ...normalizeCard({...data}),
      user_id: user.id,
      likes:[]
    });
      } 
       );

  if (!user) <Navigate replace to={ROUTES.CARDS}/>;
  return(
    <Container sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }}
    >
        <CardForm
        title='Create A New Card'
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={data}
      
        />
    </Container>
  );
}

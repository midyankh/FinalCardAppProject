import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../../users/providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import normalizeUser from '../../users/helpers/normalization/normalizeUser';
import { Container } from '@mui/material';
import EditUserForm from '../../users/components/EditUserForm';
import initialEditForm from '../../users/helpers/initialForms/initialEditForm';
import EditSchema from '../../users/models/joi-schema/EditSchema';
import mapUserToModel from '../helpers/normalization/mapUserToModel';
import useUsers from '../../users/hooks/useUsers';



export default function EditUser() {
 
  const { user_id } = useParams();

  const {handleUpdateUser , handleGetUser } = useUsers();

  const {user} = useUser();

  const {value, ...rest} = useForm(initialEditForm, EditSchema, () => {
    handleUpdateUser(user_id,{
      ...normalizeUser({...value.data}),
    });
  });
 useEffect(()=>{
    handleGetUser(user.id).then((data) =>{
      const modelUser = mapUserToModel (data);
     rest.setData(modelUser);
    });
  },[]);

  if (user)
  return (
    <Container
    sx={{
      paddingTop: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <EditUserForm
      onSubmit={rest.onSubmit}
      onReset={rest.handleReset}
      onFormChange={rest.validateForm}
      title="Edit User Page"
      errors={value.errors}
      data={value.data}
      onInputChange={rest.handleChange}
      setData={rest.setData}
    />
  </Container>


);
};
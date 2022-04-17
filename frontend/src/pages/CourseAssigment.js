import React from 'react'
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,  
  TableBody,
  Container,
  Typography,
  TableContainer,
  Button,
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
//
import { styled } from '@mui/material/styles';
import {
 
  
  OutlinedInput,
  InputAdornment
} from '@mui/material';
// component
import Iconify from '../components/Iconify';
import TableStudent from 'src/components/TableStudent';
import AlignItemsList from './List';

export default function CourseAssigment() {
    const [filterName, setFilterName] = useState('');
    const [selected, setSelected] = useState([]);
    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
      };
      const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
        width: 240,
        transition: theme.transitions.create(['box-shadow', 'width'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shorter
        }),
        '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
        '& fieldset': {
          borderWidth: `1px !important`,
          borderColor: `${theme.palette.grey[500_32]} !important`
        }
      }));
  return (
    <>
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Assigment
          </Typography> 
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Assigment
          </Button>         
        </Stack>

        <Card>
          <AlignItemsList />
        

         
         

          

          
        </Card>
      </Container>
    </Page>
    </>


  )
}

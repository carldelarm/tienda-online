import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import CrRating from './CrRating';
import { Stack } from '@mui/material';
import CrBtnAcion from './CrBtnAcion';
import { useState } from 'react';
import CrModal from './CrModal';

export default function CrCard() {

  const [isCheck, setCheckValue] = useState(true);
  const [open, setOpen] = useState(false);

  const handleCheck = () => {
    setCheckValue(!isCheck);
  }

  /*
  const handleShow = () => {
    console.log('handleShow')
  }
  */

  //Relacionado con CrModal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345}}>
        <Stack direction="row" m={2} spacing={2}>
          <CrChip />
        </Stack>
        <CardMedia
          sx={{ height: 500 }}
          component={'img'}
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          title="green iguana"
          style={{
            width: '200',
            height: '200',
            objectFit: 'contain' 
          }}
          alt='Producto'
          />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CrRating />
        </CardContent>
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <CrBtnAcion isShow isCheck={isCheck} handleShow={handleClickOpen} />
          <CrBtnAcion isCheck={isCheck} handleCheck={handleCheck} />
        </CardActions>
      </Card>
      <CrModal open={open} handleClose={handleClose} />
    </>
  );
}
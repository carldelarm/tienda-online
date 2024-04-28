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
import { Product } from '../types/Productos';
import { useHistory } from 'react-router-dom';

interface Props {
  item:Product;
}

export default function CrCard({item}: Props) {

  const [isCheck,setCheckValue] = useState(true);
  const [open,setOpen] = useState(false);

  const history = useHistory();

  const handleCheck = () => {
    setCheckValue(!isCheck);
  }

  //Relacionado con CrModal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVerDetalle = () => {
    setOpen(false);
    history.push(`/detalle/${item.id}`);
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
          image={item.image}
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
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <CrRating rate={item.rating.rate} />
        </CardContent>
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <CrBtnAcion isShow isCheck={isCheck} handleShow={handleClickOpen} />
          <CrBtnAcion isCheck={isCheck} handleCheck={handleCheck} />
        </CardActions>
      </Card>
      <CrModal open={open} handleClose={handleClose} handleVerDetalle={handleVerDetalle} />
    </>
  );
}
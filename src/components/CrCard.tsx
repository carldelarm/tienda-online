import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import CrRating from './CrRating';
import { Stack } from '@mui/material';
import { useState } from 'react';
import CrModal from './CrModal';
import { Product } from '../types/Productos';
import { useHistory } from 'react-router-dom';
import CrBtnAction from './CrBtnAction';

interface Props {
  readonly item:Product;
}

export default function CrCard({ item }: Props) {

  //const [isCheck, setIsCheck] = useState(false);
  const [isCheck] = useState(false);
  const [open,setOpen] = useState(false);

  const history = useHistory();

  /*
  const handleCheck = (id:number) => {
    setIsCheck(!isCheck);
  }
  */

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

  const dataBotones = {
    titleBtn1: 'Cerrar',
    showBtn1: true,
    titleBtn2: 'Aceptar',
    showBtn2: true
  }

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
            {item.title.length <= 30 ? item.title : item.title.substring(0, 30 - 3) + "..."} - [Cód Ref: {item.id}]
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {item.formattedPrice}
          </Typography>
          <CrRating rate={item.rating.rate} />
        </CardContent>
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <CrBtnAction isShow isCheck={isCheck} handleShow={handleClickOpen} />
          {/* <CrBtnAction isCheck={isCheck} handleCheck={() => handleCheck(item.id)} /> */}
        </CardActions>
      </Card>
      <CrModal open={open} title={item.title}
          mensaje='¿Desea ver más información sobre el detalle de este producto?'
          botones={dataBotones}
          handleClose={handleClose} 
          handleVerDetalle={handleVerDetalle} 
      />
    </>
  );
}
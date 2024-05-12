import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logoLogin from '../../../assets/logo-login1.png'
import FormLogin from './FormLogin';

export default function ContenedorLogin() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 300 }}
          component={'img'}
          image={logoLogin}
          title="green iguana"
          style={{
            width: '50',
            height: '50',
            objectFit: 'contain' 
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inicion de sesión
          </Typography>
        </CardContent>
      </CardActionArea>
      <FormLogin />
    </Card>
  );
}

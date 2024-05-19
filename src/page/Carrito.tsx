import { Box, Button, Grid } from '@mui/material';
import HomeLayout from './layout/HomeLayout';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PaymentContext } from '../store/PaymentContext';
import { Product } from '../types/Productos';
import CrCarritoCard from '../components/CrCarritoCard';

const Carrito = () => {

    const { products,setProducts } = useContext(PaymentContext);
  
    const history = useHistory();

    const [subtotal, setSubtotal] = useState<number>(0);

    const handlePayment = () => {
        if(products.length === 0) {
            history.push('/');
        } else {
            history.push('/carrito');
        }
    }

    const handleDeleteProduct = (id: number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        if(updatedProducts.length === 0) history.push('/');
    }

    const handleRedirectDetalle = (id: number) => {
        history.push(`/detalle/${id}`);
    }

    useEffect(() => {
        let subtotal = 0;
        products?.map((item:any) => {
            subtotal = subtotal + (item.price * item.selectedQuantity);
        });
        setSubtotal(subtotal);
    }, [products]);

    return (
        <HomeLayout handlePayment={handlePayment}>
            <div className='contenedor-detalle'>
                <div className='card'>
                    <Box sx={{ flexGrow: 1 }}>
                        <h2>CARRITO DE COMPRAS:</h2>
                        <Grid container spacing={1}>
                            {
                                products && products.map((item: Product) => (
                                     <CrCarritoCard key={item.id} item={item} 
                                        handleDeleteProduct={handleDeleteProduct} 
                                        handleRedirectDetalle={handleRedirectDetalle} 
                                    />
                                ))
                            }
                        </Grid>
                    </Box>
                    <p><span className='card-text-bold'>Subtotal ({products.length} productos):</span> {subtotal} $</p>
                    <Button variant='contained' onClick={()=>history.push('/')}>Ir a la pagina principal</Button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Carrito

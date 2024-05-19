import { Button } from '@mui/material';
import HomeLayout from './layout/HomeLayout';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PaymentContext } from '../store/PaymentContext';

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
                    {
                        products && products.map((item:any) => (
                            <div key={item.id} className='card-product'>
                                <h3>{item.title}</h3>
                                <img src={item.image} alt={item.title} width='150px' />
                                <p>Código Ref: {item.id}</p>
                                <p>Precio unitario: {item.formattedPrice}</p>
                                <p>Cantidad: {item.selectedQuantity}</p>
                                <p>Precio: {item.price * item.selectedQuantity} $</p>
                                <Button variant="outlined" onClick={() => handleDeleteProduct(item.id)}>Eliminar</Button>
                                <hr />
                            </div>
                        ))
                    }
                    <p>Subtotal ({products.length} productos): {subtotal} $</p>
                    <Button variant='contained' onClick={()=>history.push('/')}>Ir a la pagina principal</Button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Carrito

import { Button } from '@mui/material';
import HomeLayout from '../page/layout/HomeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/Productos';

const DetalleProducto = () => {

    const history = useHistory();
    let {slug} = useParams();
    const [detalle, setDetalle] = useState<Product>({} as Product);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${slug}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetalle(data);
        })
        .catch(err => console.log(err))    
        
    }, [slug])

    return (
        <HomeLayout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <h1>{detalle.title}</h1>
                <p>Categoría: {detalle.category}</p>
                <img src={detalle.image} alt={detalle.title} style={{width: '200px', height: '200px'}}/>
                <p>{detalle.description}</p>
                <p>Precio: {detalle.price}</p>
                <p>Puntación: {detalle.rating?.rate}</p>

                <Button variant='contained' onClick={()=>history.push('/')}>Ir Atras</Button>
            </div>
        </HomeLayout>
    )
}

export default DetalleProducto

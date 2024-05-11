import { Button } from '@mui/material';
import HomeLayout from './layout/HomeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/Productos';

const DetalleProducto = () => {

    const history = useHistory();
    let {slug} = useParams();
    const [detalle, setDetalle] = useState<Product>({} as Product);

    const urlApi = import.meta.env.VITE_URL_API_PRODUCTS as string;

    useEffect(() => {
        fetch(`${urlApi}/${slug}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const formattedItem = {
                ...data,
                isAddProduct:false,
                formattedPrice: `${data.price} $`
            }
            setDetalle(formattedItem);
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
                <p>Precio: {detalle.formattedPrice}</p>
                <p>Puntación: {detalle.rating?.rate}</p>
                <p>Cantidades disponibles: {detalle.rating?.count}</p>

                <Button variant='contained' onClick={()=>history.push('/')}>Ir Atras</Button>
            </div>
        </HomeLayout>
    )
}

export default DetalleProducto

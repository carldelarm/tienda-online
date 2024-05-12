import { Button } from '@mui/material';
import HomeLayout from './layout/HomeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/Productos';
import CrComboBoxItems from "../components/CrComboBoxItems";

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
            <div className='contenedor-detalle'>
                <div className='card'>
                    <h1>{detalle.title}</h1>
                    <p><span className='card-text-bold'>Categoría:</span> {detalle.category}</p>
                    <img src={detalle.image} alt={detalle.title} style={{width: '200px', height: '200px'}}/>
                    <p>{detalle.description}</p>
                    <p><span className='card-text-bold'>Precio:</span> {detalle.formattedPrice}</p>
                    <p><span className='card-text-bold'>Puntación:</span> {detalle.rating?.rate}</p>
                    <p><span className='card-text-bold'>Cantidades disponibles:</span> {detalle.rating?.count}</p>
                    {
                        detalle.rating?.count > 0 && <CrComboBoxItems cantidadDisponible={detalle.rating?.count} />
                    }
                    <br />

                    <Button variant='contained' onClick={()=>history.push('/home')}>Ir Atras</Button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default DetalleProducto

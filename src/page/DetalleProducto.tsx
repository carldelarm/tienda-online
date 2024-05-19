import { Button } from '@mui/material';
import HomeLayout from './layout/HomeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Product } from '../types/Productos';
import CrComboBoxItems from "../components/CrComboBoxItems";
import { PaymentContext } from '../store/PaymentContext';

const DetalleProducto = () => {

    const { products,setProducts } = useContext(PaymentContext);
    //console.log('[DetalleProducto] products: ',products);
  
    const history = useHistory();
    let {slug} = useParams();

    const [detalle, setDetalle] = useState<Product>({} as Product);
    const [ quantity, setQuantity ] = useState<number>(1);

    const urlApi = import.meta.env.VITE_URL_API_PRODUCTS as string;

    useEffect(() => {
        fetch(`${urlApi}/${slug}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const formattedItem = {
                ...data,
                isAddProduct:false,
                formattedPrice: `${data.price} $`,
                selectedQuantity: 0
            }
            setDetalle(formattedItem);
        })
        .catch(err => console.log(err))    
        
    }, [slug]);

    const handleAddArticle = () => {
        const newProductsList = products ? products : [];
        const productToSearch = newProductsList.find((item:Product) => item.id === detalle.id);

        if(productToSearch != undefined) {
            newProductsList.map((item:Product) => {
                if(item.id === detalle.id){
                    item.selectedQuantity = item.selectedQuantity + quantity;
                }
            });
            const tempList = newProductsList.filter(product => product.id !== detalle.id);
            setProducts(tempList);
            setProducts([...tempList,productToSearch]);

        } else {
            const newProductToAdd = {
                ...detalle,
                isAddProduct: true,
                selectedQuantity: quantity
            }
            setProducts([...newProductsList,newProductToAdd]);
        }
    }

    const handlePayment = () => {
        if(products.length === 0) {
            history.push('/');
        } else {
            history.push('/carrito');
        }
    }
    
    return (
        <HomeLayout handlePayment={handlePayment}>
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
                        detalle.rating?.count > 0 && 
                        <CrComboBoxItems cantidadDisponible={detalle.rating?.count} 
                        setQuantity={setQuantity} />
                    }
                    <br />
                    <Button variant='contained' onClick={handleAddArticle}>Agregar al carrito</Button><br /><br />
                    <Button variant='contained' onClick={()=>history.push('/')}>Ir a la pagina principal</Button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default DetalleProducto

import { Button, Grid } from "@mui/material";
import { Product } from "../types/Productos";
import CrComboBoxItems from "./CrComboBoxItems";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../store/PaymentContext";

interface Props {
    item:Product;
    handleDeleteProduct: (id:number) => void;
    handleRedirectDetalle: (id:number) => void;
}

const CrCarritoCard = ({ item,handleDeleteProduct,handleRedirectDetalle }: Props) => {

    const { products,setProducts } = useContext(PaymentContext);

    const [ newQuantity,setNewQuantity ] = useState<number>(item.selectedQuantity);

    useEffect(() => {
        item.selectedQuantity = newQuantity;
        const filteredProducts = products.filter((product:Product) => product.id !== item.id);
        setProducts(filteredProducts);
        setProducts([...filteredProducts,item]);
    },[newQuantity]);

    return (
        <>
            <Grid item xs={12} sm={12} md={4} xl={3} lg={3} mt={3}>
                <img src={item.image} alt={item.title} width='85%' />                                        
            </Grid>
            <Grid item xs={12} sm={12} md={8} xl={9} lg={9} >
                <h3>{item.title}</h3>
                <p><span className='card-text-bold'>Código Ref: </span>{item.id}</p>  
                <p><span className='card-text-bold'>Precio unitario: </span>{item.formattedPrice}</p>
                {/* <p><span className='card-text-bold'>Cantidad: </span>{item.selectedQuantity}</p> */}
                {
                    <CrComboBoxItems cantidadDisponible={item.rating?.count} setQuantity={setNewQuantity} myValue={newQuantity} />
                }
                <p><span className='card-text-bold'>Precio: </span>{item.price * item.selectedQuantity} $</p>
                <Button variant="outlined" onClick={() => handleRedirectDetalle((item.id))}>Ir al detalle</Button>&nbsp;&nbsp;
                <Button variant="outlined" onClick={() => handleDeleteProduct(item.id)}>Eliminar</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} >
                <hr />
            </Grid>
        </>
    )
}

export default CrCarritoCard

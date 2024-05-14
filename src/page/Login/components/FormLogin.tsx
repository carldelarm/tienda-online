import { Button, TextField } from "@mui/material"
import { Formik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { AuthContext } from "../../../Auth/AuthContext";

const FormLogin = () => {

    const { login } = useContext(AuthContext);
    const history = useHistory();
    const initialValues = {user: '',password: ''};
    
    const schema = Yup.object().shape({
        user: Yup.string().required('Campo requerido').min(3, 'Too Short!').max(50, 'Too Long!'),
        password: Yup.string().required('Campo requerido')
    });

    interface User {
        user: string,
        password: string
    }

    const handleFetch = async (values: User) => {
        setTimeout(() => {
            //Simula que fue al servidor y obtuvo los datos
            const data = {
                statusCode: 200,
                message: 'OK',
                user: {
                    id: '1-server',
                    name: values.user
                }
            }
            if(data.statusCode === 200){
                login(data.user);
                history.push('/admin');
            }
        }, 2000);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Iniciando sesión exitosamente');
                    console.log(values);
                    handleFetch(values);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    //isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} 
                        style={{
                            display:'flex',
                            flexDirection:'column',
                            gap: '5px',
                            padding: '10px'
                        }}
                        >

                        <TextField name="user" onChange={handleChange} value={values.user} onBlur={handleBlur} 
                            id="outlined-required" label="User"  
                        />
                        <span style={{color:'red'}}>{errors.user && touched.user && errors.user}</span>

                        <TextField name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} 
                            id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                        <span style={{color:'red'}}>{errors.password && touched.password && errors.password}</span>

                        {/*                         
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        */}                        

                        <Button variant="contained" 
                            onClick={(e: any) => {
                                handleSubmit(e)
                            }}>
                            Iniciar sesión
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormLogin

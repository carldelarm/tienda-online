import ContenedorLogin from "./components/ContenedorLogin"

const Login = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: '#f5f5f5'
            }
        }>
            <ContenedorLogin />
        </div>
    )
}

export default Login

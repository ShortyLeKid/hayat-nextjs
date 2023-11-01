import { TextField, Button } from "@mui/material"
import './login.scss'

const Login = () => {

    return (
        <div className="form-container">
            <form className="form-container__form">
                <TextField label="Email" />
                <TextField label="Mot de passe" />
                <Button>Se connecter</Button>
            </form>
        </div>
    )
}

export default Login
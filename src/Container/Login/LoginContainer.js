import React, { useState } from 'react'
import '../Login/Login.css';
import LabelContainer from '../label/LabelContainer';
import Titulo from '../Titulo/Titulo';
import Input from '../input/input'
import MainContainer from '../Maincontainer';


const LoginContainer = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);


    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);
            setHasError(false);
        } else {
            if (value.lenght < 6) {
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value)
                setHasError(false);
            }

        }
    };

    function ifMatch(param) {
        console.log(param.user, param.password);
        if (param.user.length > 0 && param.password.length > 0) {           
            if (param.user === 'Miguelin' && param.password === '123456') {                
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account);

        }
    }

    return (
        <div className='log-container'>
            {isLogin ?
                <MainContainer /> :
                <div className="log-container">
                    <Titulo text='¡Bienvenido!' />
                    {hasError &&
                        <label className='label-alert'>
                            Su contraseña o usuario son incorrectos
                            o no existen
                    </label>
                    }
                    <LabelContainer text='Usuario' />
                    <Input attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Ingrese su usuario'

                    }}
                        handleChange={handleChange}
                    />
                    <LabelContainer text='Contraseña' />
                    <Input attribute={{
                        id: 'contraseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Ingrese su contraseña'

                    }}
                        handleChange={handleChange}
                        param={passwordError}
                    />
                    {passwordError &&
                        <label className='label error'> Contraseña invalida o incompleta </label>
                    }
                    <div className='submit-button-container'>
                        <button onClick={handleSubmit}>
                            Ingresar
                    </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default LoginContainer

import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button'


export default function Form({ type, setUserData, userData }) {
    const navigate = useNavigate()
    console.log(userData)
    switch (type) {
        case 'login':
            return (
                <Wrapple>
                    <form onSubmit={submit}>
                        <input type="text" placeholder='email' name="email" onChange={handleForm} value={userData.email} required />
                        <input type="password" placeholder="senha" name="password" onChange={handleForm} value={userData.password} required />
                        <Button>Entrar</Button>
                    </form>
                    <Link to='/cadastro'><h3>Não tem uma conta? Cadastre-se!</h3></Link>
                </Wrapple>
            )
        case 'signIn':
            return (
                <Wrapple>
                    <form onSubmit={submit}>
                        <input type="email" placeholder='email' name="email" onChange={handleForm} value={userData.email} required />
                        <input type="text" placeholder="senha" name="password" onChange={handleForm} value={userData.password} required />
                        <input type="text" placeholder='nome' name="name" onChange={handleForm} value={userData.name} required />
                        <input type="url" placeholder="foto" name="picture" onChange={handleForm} value={userData.picture} required />
                        <Button>Cadastrar</Button>
                    </form>
                    <Link to='/'><h3>Já tem uma conta? Faça login!</h3></Link>
                </Wrapple>
            )
        default:
            return;
    }

    function handleForm(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }
    function submit(event) {
        event.preventDefault();

        if (userData.name && userData.picture) {
            function createUser() {
                console.log('Ainda em desenvolvimento:' + { userData })
            }
            createUser();
        } else {
            function login() {
                console.log('Ainda em desenvolvimento' + { userData });
                navigate('/habitos');
            }
            login()
        }
    }
}


const Wrapple = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    margin-bottom: 25px;
}
 input {
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    font-family: "Lexend Deca";
 }
 h3 {
    color: #52b6ff;
    text-decoration: underline #52b6ff;
}
`

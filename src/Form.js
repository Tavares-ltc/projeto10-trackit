import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Form({ type, setUserData, userData }) {
console.log(userData)
    switch (type) {
        case 'login':
            return (
                <Wrapple>
                    <form onSubmit={handleForm}>
                        <input type="text" placeholder='email' name="email" onChange={handleForm} value={userData.email} required />
                        <input type="text" placeholder="senha" name="password" onChange={handleForm} value={userData.password} required />
                        <button type='submit'>Entrar</button>
                    </form>
                    <Link to='/cadastro'><h3>Não tem uma conta? Cadastre-se!</h3></Link>
                </Wrapple>
            )
            break
        case 'signIn':
            return (
                <Wrapple>
                    <form onSubmit={handleForm}>
                        <input type="email" placeholder='email' name="email" onChange={handleForm} value={userData.email} required />
                        <input type="password" placeholder="senha" name="password" onChange={handleForm} value={userData.password} required />
                        <input type="text" placeholder='nome' name="name" onChange={handleForm} value={userData.name} required />
                        <input type="url" placeholder="foto" name="picture" onChange={handleForm} value={userData.picture} required />
                        <button type='submit'>Cadastrar</button>
                    </form>
                    <Link to='/cadastro'><h3>Já tem uma conta? Faça login!</h3></Link>
                </Wrapple>
            )
            break;
        default:
            return;
    }

    function handleForm(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
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
 input, button {
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
button {
    color: #FFFFFF;
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 3px;
    border: none;
}
`

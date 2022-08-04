import "@fontsource/lexend-deca";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button'
import Days from "./Days";
import { signUp, login } from './trackit'
import { useEffect, useState } from "react";

export default function Form({ type, setUserData, userData }) {
    const [selectedDays, setSelectedDays] = useState([])
    const [loading, setLoading] = useState(false)
    const [habit, setHabit] = useState(
        {
            name: '',
            days: []
        })
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]


    const navigate = useNavigate()
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
                        <input type="url" placeholder="foto" name="image" onChange={handleForm} value={userData.image} required />
                        <Button loading={loading}>Cadastrar</Button>
                    </form>
                    <Link to='/'><h3>Já tem uma conta? Faça login!</h3></Link>
                </Wrapple>
            )
        default:
            return (
                <Wrapple>
                    <form onSubmit={submit}>
                        <input type="text" placeholder='nome do habito' name="name" onChange={handleHabit} value={selectedDays.neme} required />
                        <Weekdays>
                            {weekdays.map((item, index) => <Days item={item} index={index} key={index} setHabit={ setHabit} habit={habit} />)}
                        </Weekdays>
                        <Container>
                            <h3>Calcelar</h3>
                            <Button loading={loading} template={'small'}>Salvar</Button>
                        </Container>
                    </form>
                </Wrapple>
            )
    }

    function handleForm(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }
    function handleHabit(event) {
        setHabit({
            ...habit,
            [event.target.name]: event.target.value,
        })
        console.log(selectedDays)
        console.log(habit)
    }
    function submit(event) {
        event.preventDefault();
        console.log(userData)
        setLoading(true);

        if (userData.name && userData.image) {
            signUp(userData).then(()=> {
                console.log('yey')
                setLoading(false)})
        } else {
            login(userData)
            .then(()=> navigate('/habitos'))
        }
    }
}
// .catch(()=> {
//     setLoading(false)})
//     alert('Algo saiu errado, talvez o usuário ja exista.')
// .catch(()=> alert('Algo deu errado. Cheque o usuario ou a senha.'))

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
    padding-left: 10px;
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
const Weekdays = styled.div`
display: flex;
gap: 5px;
align-items: center;

`


const Container = styled.div`
margin-top: 20px;
display: flex;
justify-content: end;
align-items: center;
gap: 20px;
`

{/* <Day onClick={() => selectDay(0)}>D</Day>
                            <Day onClick={() => selectDay(1)}>S</Day>
                            <Day onClick={() => selectDay(2)}>T</Day>
                            <Day onClick={() => selectDay(3)}>Q</Day>
                            <Day onClick={() => selectDay(4)}>Q</Day>
                            <Day onClick={() => selectDay(5)}>S</Day>
                            <Day onClick={() => selectDay(6)}>S</Day> */}
import "@fontsource/lexend-deca";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button'
import Days from "./Days";
import { signUp, login, createHabit } from './trackit'
import { useState } from "react";

export default function Form({ type, setUserData, userData, setHasNewHabit, setDisplay }) {
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
                    <form onSubmit={logon}>
                        <input type="text" placeholder='email' name="email" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.email} required />
                        <input type="password" placeholder="senha" name="password" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.password} required />
                        <Button loading={loading}>Entrar</Button>
                    </form>
                    <Link to='/cadastro'><h3>Não tem uma conta? Cadastre-se!</h3></Link>
                </Wrapple>
            )
        case 'signIn':
            return (
                <Wrapple>
                    <form onSubmit={signIn}>
                        <input type="email" placeholder='email' name="email" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.email} required />
                        <input type="text" placeholder="senha" name="password" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.password} required />
                        <input type="text" placeholder='nome' name="name" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.name} required />
                        <input type="url" placeholder="foto" name="image" disabled={(loading) ? "disabled" : ""} onChange={handleForm} value={userData.image} required />
                        <Button loading={loading}>Cadastrar</Button>
                    </form>
                    <Link to='/'><h3>Já tem uma conta? Faça login!</h3></Link>
                </Wrapple>
            )
        default:
            return (
                <Wrapple>
                    <form onSubmit={postHabit}>
                        <input type="text" placeholder='nome do habito' name="name" disabled={(loading) ? "disabled" : ""} onChange={handleHabit} value={habit.name} required />
                        <Weekdays disabled={(loading) ? "disabled" : ""}>
                            {weekdays.map((item, index) => <Days item={item} index={index} key={index} setHabit={setHabit} habit={habit}/>)}
                        </Weekdays>
                        <Container>
                            <h3 onClick={()=> setDisplay(false)}>Cancelar</h3>
                            <Button  loading={loading} template={'small'}>Salvar</Button>
                        </Container>
                    </form>
                </Wrapple>
            )
    }
    function postHabit(event) {
        event.preventDefault();
        setLoading(true)
        if (habit.days.length > 0) {
            
            createHabit(habit).then( ()=> {
                habit.name = ''
                setHabit(
                    {
                        name: '',
                        days: []
                    })
                setHasNewHabit(habit.name)
                setDisplay(false)
                setLoading(false)
            }
            )
            .catch(()=> {
                alert('Algo saiu errado.')
                setLoading(false)
            })
        } else {
            alert('Adicione ao menos um dia ao seu hábito.')
            setLoading(false)
        }
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
    }
    

    function signIn(event) {
        event.preventDefault();
        setLoading(true);
        signUp(userData)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch(() => {
                alert('Algo deu errado, ou o usuário já existe.')
                setLoading(false)
            })
    }
    function logon(event) {
        event.preventDefault();
        setLoading(true);
        const loginData = { email: userData.email, password: userData.password }
        login(loginData)
            .then((promise) => {
                localStorage.setItem('userData', promise.data.token)
                localStorage.setItem('img', promise.data.image)

                setLoading(false)
                navigate('/habitos')
            })
            .catch(() => {
                alert('Algo deu errado, verifique os dados e tente novamente.')
                setLoading(false)
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
    &:hover {
     cursor: pointer;   
    }
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


import "@fontsource/lexend-deca";
import Button from "./Button"
import styled from 'styled-components'
import CreateHabit from "./CreateHabit";
import { useState } from "react";

export default function Habits() {
    const [display, setDisplay] = useState(false)
    console.log(display)
    return (
        <Wrapple>
            <Container>
                <HabitsHeader>
                    <h1> Meus hábitos </h1>
                    <Button template={'addHabit'} onClick={() => setDisplay(!display)} >+</Button>
                </HabitsHeader>
                <CreateHabit display={display}/>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
        </Wrapple>
    )
}

const Wrapple = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Container = styled.div`
width: 380px;
p {
    margin-top: 29px;
    font-size: 18px;
    font-family: "Lexend Deca";
    color: #666666;
}
`
const HabitsHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h1 {
    font-family: "Lexend Deca";
    color: #126BA5;
    font-size: 18px;
}
`

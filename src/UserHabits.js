import Button from "./Button"
import styled from 'styled-components'
import "@fontsource/lexend-deca";

export default function UserHabits() {
    return (
        <Wrapple>
            <Container>
                <HabitsHeader>
                    <h1> Meus hábitos </h1>
                    <Button template={'addHabit'} >+</Button>
                </HabitsHeader>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
        </Wrapple>
    )
}

const Wrapple = styled.div`
margin-top: 98px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Container = styled.div`
width: 80%;
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
}
`

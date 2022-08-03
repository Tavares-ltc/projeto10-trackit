import "@fontsource/lexend-deca";
import Button from "./Button"
import styled from 'styled-components'
import CreateHabit from "./CreateHabit";

export default function Habits() {
    return (
        <Wrapple>
            <Container>
                <HabitsHeader>
                    <h1> Meus hábitos </h1>
                    <Button template={'addHabit'} >+</Button>
                </HabitsHeader>
                <CreateHabit/>
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

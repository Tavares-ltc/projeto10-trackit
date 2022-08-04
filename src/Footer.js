import styled from 'styled-components'
import Button from './Button'

export default function Footer() {
    return (
        <Wrappler>
                <Container>
                    <h1>Hábitos</h1>
                    <Button template={'rounded'}>Hoje</Button>
                    <h1>Histórico</h1>
                </Container>
        </Wrappler>
    )
}

const Wrappler = styled.div`
position: fixed;
bottom: 0;
left: 0;
h1 {
    font-family: "Lexend Deca";
    color: #52B6FF;
    font-size: 23px;
    margin: auto;
}
`
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
box-sizing: border-box;
height: 70px;
width: 100vw;
background-color: white;
padding: 10px;

`
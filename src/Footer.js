import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useContext } from 'react';
import { UserContext } from './context';

export default function Footer() {
    const {progressPercentage} = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <Wrappler>
            <Container>
                <h1 onClick={() => navigate('/habitos')}>Hábitos</h1>
                <Button onClick={() => navigate('/hoje')} template={'rounded'}>
                    <TextContainer> <h1>Hoje</h1>
                    </TextContainer>
                    <CircularProgressbar value={progressPercentage} background backgroundPadding={3} padding={10} styles={buildStyles({ backgroundColor: '#52B6FF', textColor: "#fff", pathColor: "#fff", trailColor: "transparent" })} />
                </Button>
                <h1 onClick={() => navigate('/historico')}>Histórico</h1>
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
const Button = styled.div`
width: 91px;
height: 91px;
position: relative;
&:hover {
    cursor: pointer;
}

`
const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
h1 {
    margin: 31px 20px;
    color: white;
}
`

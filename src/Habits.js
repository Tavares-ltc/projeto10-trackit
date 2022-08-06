import "@fontsource/lexend-deca";
import Button from "./Button"
import styled from 'styled-components'
import CreateHabit from "./CreateHabit";
import { useEffect, useState } from "react";
import { getHabits, deleteHabit } from './trackit'
import Days from "./Days";

export default function Habits() {
    const [habitsList, setHabitsList] = useState([])
    const [hasNewHabit, setHasNewHabit] = useState()

    useEffect(() => {
        getHabits().then((habits) => {
            setHabitsList(habits.data)
        })
    }, [hasNewHabit])

    console.log('Esse é seu novo habito: ' + hasNewHabit)
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [display, setDisplay] = useState(false)
    console.log(display)
    return (
        <Wrappler>
            <Container>
                <HabitsHeader>
                    <h1> Meus hábitos </h1>
                    <Button template={'addHabit'} onClick={() => setDisplay(!display)} >+</Button>
                </HabitsHeader>
                <CreateHabit display={display} setHasNewHabit={setHasNewHabit} setDisplay={setDisplay} />
                {(habitsList.length === 0) ?
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    : habitsList.map((habit, index) => {
                        return (
                            <Habit key={index}>
                                <h1>{habit.name}</h1>
                                <Weekdays>
                                    {weekdays.map((item, index) => (habit.days.includes(index)) ?
                                        <Days isColored={true} withoutButtons={true} item={item} index={index} key={index} /> :
                                        <Days isColored={false} withoutButtons={true} item={item} index={index} key={index} />)}
                                </Weekdays>
                                <img onClick={() => {
                                    deleteHabit(habit.id).then(
                                        () => setHasNewHabit(habit.id)
                                    )
                                }} src="/img/trash.svg" alt="" />
                            </Habit>
                        )
                    })}
            </Container>
        </Wrappler>
    )
}

const Wrappler = styled.div`
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
    font-size: 23px;
}
`
const Habit = styled.div`
box-sizing: border-box;
margin-top: 20px;
padding-top: 8px;
width: 380px;
height: 95px;
background-color: #ffffff;
border-radius: 10px;
padding-left: 35px;
position: relative;
&:last-of-type {
    margin-bottom: 160px;
}
h1 {
margin-bottom: 15px;
font-family: 'Lexend Deca';
font-size: 20px;
line-height: 25px;
width: 303px;
color: #666666;
}
img {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 10px;
    margin-right: 10px;
    width: 13px;
    height: 15px;
    
}
img:hover {
        cursor: pointer;
    }
`
const Weekdays = styled.div`
display: flex;
gap: 5px;
align-items: center;

`
export { Container, Habit }
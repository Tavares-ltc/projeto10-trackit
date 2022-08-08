import { getTodayHabits, checkIt } from './trackit'
import styled from 'styled-components'
import { Container, Habit } from './Habits'
import Footer from './Footer'
import Header from './Header'
import Checkbox from './Checkbox'
import { useState, useEffect } from 'react'
import dayjs from "dayjs"

export default function TodayPage() {
    useEffect(() => {
        const today = dayjs().format('dddd')
        switch (today) {
            case 'Sunday':
                setWeekday('Domingo');
                break;
            case 'Monday':
                setWeekday('Segunda');
                break;
            case 'Tuesday':
                setWeekday('Terça');
                break;
            case 'Wednesday':
                setWeekday('Quarta');
                break;
            case 'Thursday':
                setWeekday('Quinta');
                break;
            case 'Friday':
                setWeekday('Sexta');
                break;
            case 'Sunday':
                setWeekday('Sábado');
                break;
            default:
                setWeekday('');
        }

    }, [])


    const [weekday, setWeekday] = useState('')
    const [todayActivities, setTodayActivities] = useState([])
    const [lastChange, setLastChange] = useState([])
    useEffect(() => {
        getTodayHabits().then((habits) => {
            setTodayActivities(habits.data)
        })
    }, [lastChange])
    let percentageDone = (todayActivities.filter((item) => item.done === true)).length * 100 / todayActivities.length

    return (
        <>
            <Header />
            <Wrappler>
                <Container>
                    <TodayHeader>
                        <h1>{weekday}, {dayjs().format('DD/MM')}</h1>
                        {(percentageDone === 0) ? <p> Nenhum hábito concluido ainda.</p> : <p> {percentageDone.toFixed(0)}% dos hábitos concluídos.</p>}


                    </TodayHeader>
                    <TodayActivities>
                        {todayActivities.map((activity, index) => {
                            return (
                                <Activity key={index}>
                                    <div>
                                        <h1>{activity.name}</h1>
                                        <p>Sequência atual:<strong> {activity.currentSequence}</strong></p>
                                        {(activity.currentSequence < activity.highestSequence) ?
                                            <p>Seu recorde: {activity.highestSequence}</p> :
                                            <p>Seu recorde:<strong> {activity.highestSequence}</strong></p>}
                                    </div>
                                    <Checkbox key={index} isDone={activity.done} activityId={activity.id} setLastChange={setLastChange} lastChange={lastChange} />
                                </Activity>
                            )
                        })}

                    </TodayActivities>

                </Container>
            </Wrappler>
            <Footer />
        </>
    )
}
const TodayHeader = styled.div`
display: flex;
h1 {
    font-family: "Lexend Deca";
    color: #126BA5;
    font-size: 23px;
}
p {
    margin-top: 10px;
}
flex-direction: column;
`
const Wrappler = styled.div`
background-color: #E5E5E5;
box-sizing: border-box;
padding-top: 98px;
min-height: 100vh;
display: flex;
justify-content: center;
`
const TodayActivities = styled.div`
width: 50px;
h1 {
    width: 230px;
    margin-bottom: 10px;
}
p {
    margin-top: 2px;
    font-size: 13px;

}

`


const Activity = styled(Habit)`
 display: flex;
 strong {
    color: #8FC549;
 }
`
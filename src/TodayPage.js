import { getTodayHabits } from './trackit'
import styled from 'styled-components'
import { Container, Habit } from './Habits'
import Footer from './Footer'
import Header from './Header'
import { useState, useEffect } from 'react'

export default function TodayPage() {
    const [todayActivies, setTodayActivities] = useState([])
    useEffect(() => {
        getTodayHabits().then((habits) => {
            setTodayActivities(habits.data)
        })
    }, [])
    console.log(todayActivies)

    return (
        <>
            <Header />
            <Wrappler>
                <Container>
                    <TodayHeader>
                        <h1>Segunda, dia po</h1>
                        <p> Nenhum hábito concluido ainda.</p>
                    </TodayHeader>
                    <TodayActivies>
                        {todayActivies.map((activity, index) =>
                            <Activity key={index}>
                                <div>
                                    <h1>{activity.name}</h1>
                                    <p>Sequência atual:<bold> {activity.currentSequence}</bold></p>
                                    {(activity.currentSequence < activity.highestSequence) ?
                                        <p>Seu recorde: {activity.highestSequence}</p> :
                                        <p>Seu recorde:<bold> {activity.highestSequence}</bold></p>}
                                </div>

                                <Checkbox />
                            </Activity>)}

                    </TodayActivies>

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
const TodayActivies = styled.div`
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
const Checkbox = styled.div`
width: 69px;
height: 69px;
border-radius: 3px;
background-color: #8FC549;
box-sizing: content-box;
position: absolute;
right: 0;
margin: 5px;
margin-right: 10px;


`

const Activity = styled(Habit)`
 display: flex;
 bold {
    color: #8FC549;
 }
`
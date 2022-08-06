import styled from 'styled-components'
import { useState } from 'react'

export default function Days({ item, index, habit, setHabit, withoutButtons, isColored }) {

    const [clicked, setClicked] = useState(false)


    function selectDay(num) {
        if (habit["days"].includes(num)) {
            setHabit({
                ...habit,
                days: [...habit['days']].filter(day => day !== num)
            })
        } else {
            setHabit({
                ...habit,
                days: [...habit['days'], num]
            })
        }
        console.log(habit)
    }

    if (withoutButtons) {
        return (
            <Day clicked={(isColored) ? true : false}>{item}</Day>
        )
    } else {
        return (
            <Day clicked={clicked} onClick={() => {
                selectDay(index)
                setClicked(!clicked)
            }} >{item}</Day>
        )
    }
}
const Day = styled.div`
width: 30px;
height: 30px;
border-radius: 3px;
border: solid 2px #D4D4D4;
font-family: "Lexend Deca";
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => (props.clicked) ? '#CFCFCF' : '#ffffff'} ;
;
color: ${(props) => (props.clicked) ? '#FFFFFF' : '#7c7b7bec'} ;
&:hover {
    cursor: pointer;
}
    `
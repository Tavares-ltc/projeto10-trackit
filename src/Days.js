import styled from 'styled-components'
import { useState } from 'react'

export default function Days({item, index, habit, setHabit}) {

    const [clicked, setClicked] = useState(false)
    

    function selectDay(num) {
        if (habit["days"].includes(num)) {
            setHabit({name: [...habit['name']], 
            days: [...habit['days']].filter(day => day !== num)})
        } else {
            setHabit({name: [...habit['name']],
             days: [...habit['days'],num]})
        }
        console.log(habit)
    }
    

    return (
        <Day clicked={clicked} onClick={() => {
            selectDay(index)
            setClicked(!clicked)
        }} >{item}</Day>
    )
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
color: ${(props)=> (props.clicked)? 'red' :'#7c7b7bec'  } ;
`
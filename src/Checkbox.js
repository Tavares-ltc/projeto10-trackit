import styled from 'styled-components'
import { checkIt, unCheckIt } from './trackit'
import { useState } from 'react'

export default function Checkbox({ isDone, activityId, setLastChange, lastChange}) {
    const [isChecked, setIsChecked] = useState(isDone)
    
    return (
        <Wrappler isChecked={isChecked} onClick={() => {
            if (isChecked) {
                unCheckIt(activityId)
                    .then(() => {
                        setIsChecked(!isChecked)
                        setLastChange([...lastChange, activityId])
                    })
                    
            } else {
                checkIt(activityId)
                    .then(() => {
                        setIsChecked(!isChecked)
                        setLastChange([...lastChange, activityId])
                    })
            }
        }} >
            <img src='/img/checked.png' />
        </Wrappler>
    )


}



const Wrappler = styled.div`
width: 70px;
height: 70px;
border-radius: 3px;
background-color: ${(props) => props.isChecked ? '#8FC549' : "#E7E7E7"};
box-sizing: content-box;
position: absolute;
right: 0;
margin: 5px;
margin-right: 10px;
&:hover {
    cursor: pointer;
}

img {
 width: 35px;
 height: 30px;
 margin-right: 15px;
 margin-top: 20px;

}

`
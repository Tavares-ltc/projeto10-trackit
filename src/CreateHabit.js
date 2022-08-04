import Form from "./Form"
import styled from "styled-components"

export default function CreateHabit({ display }) {
    if (display) {

        return (
            <Wraple>
                <Form />
            </Wraple>
        )
    } else {
        return (
            ''
        )
    }
}

const Wraple = styled.div`
box-sizing: border-box;
margin-top: 20px;
padding-top: 20px;
width: 380px;
height: 180px;
background-color: #ffffff;
border-radius: 10px;
`


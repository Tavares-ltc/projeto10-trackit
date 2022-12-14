import styled from 'styled-components'
import { ThreeDots } from 'react-loader-spinner'

export default function Button({ template, children, loading, ...otherProps }) {
    if (loading) {
        return (
            <Wrappler template={template} {...otherProps}>
                    <button type='submit' disabled={(loading) ? "disabled" : ""}>
                    <Container>
                        <ThreeDots
                            height="40"
                            width="80"
                            radius="9"
                            color="#f9fdff"
                            ariaLabel="three-dots-loading"
                            wrapperClassName="container" />
                    </Container>
                    </button>
            </Wrappler >
        )

    } else {
        return (

            <Wrappler template={template} {...otherProps}>
                <button type='submit'>{children}</button>
            </Wrappler>
        )
    }

}

const Wrappler = styled.div`
button {
    width: ${(props) => {
        console.log(props.template)
        switch (props.template) {
            case 'addHabit':
                return 45;
            case 'small':
                return 84;
            case 'rounded':
                return 91;
            default:
                return 303;
        }
    }
    }px;
height: ${(props) => {
        switch (props.template) {
            case 'addHabit':
                return 35;
            case 'small':
                return 35;
            case 'rounded':
                return 91;
            default:
                return 45;
        }
    }}px;
border: 1px solid #d5d5d5;
border-radius: ${(props) => (props.template === 'rounded') ? 100 : 5}px;
font-size: 20px;
display: flex;
justify-content: center;
font-family: "Lexend Deca";
color: #FFFFFF;
background-color: #52B6FF;
&:hover {
    cursor: pointer;
}
}
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
text-align: center;
`

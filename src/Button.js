import styled from 'styled-components'

export default function Button({template, children, ...otherProps}) {
    return (
        <Wrappler template={template} otherProps={otherProps}>
            <button type='submit'>{children}</button>
        </Wrappler>
    )
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
            default:
                return 303;
        }
    }
    }px;

height: ${(props) => props.template ? 35 : 45}px;
border: 1px solid #d5d5d5;
border-radius: 5px;
font-size: 20px;
font-family: "Lexend Deca";
color: #FFFFFF;
background-color: #52B6FF;
}
`
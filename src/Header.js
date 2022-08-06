import styled from 'styled-components'
import "@fontsource/playball"
export default function Header() {
    return (
        <Wrapple>
            <h1>TrackIt</h1>
            <img src="https://i.pinimg.com/736x/b4/fd/0b/b4fd0bf7276d1f98064862b160459f01.jpg" alt='' />
        </Wrapple>
    )
}

const Wrapple = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color:#126BA5;
padding: 0 10px;
box-sizing: border-box;
width: 100%;
height: 70px;
position: fixed;
z-index: 2;
top: 0;
left: 0;
img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
}
h1 {
    font-size: 41px;
    font-family:'Playball';
    color: #ffffff;
}
`


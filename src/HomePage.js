import { Children } from 'react';
import styled from 'styled-components';
import Form from "./Form";


export default function HomePage({ type, setUserData, userData }) {
    return (
        <Wrapple>
            <img src='/img/trackit_logo.png' alt='' />
            <Form setUserData={setUserData} userData={userData} type={type} />
        </Wrapple>
    )
}
const Wrapple = styled.div`
margin-top: 68px;
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 180px;
    height: 180px;
    margin-bottom: 36px;
}

`

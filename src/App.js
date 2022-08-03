import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { useState } from 'react';


import GlobalStyle from './globalStyles';
export default function App() {
    const [userData, setUserData] = useState({email: '', password: '',name: '' , picture: '' })

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage type={'login'} setUserData={setUserData} userData={userData}/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

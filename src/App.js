import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';
import HabitsPage from './HabitsPage'
import TodayPage from './TodayPage';

export default function App() {
    const [userData, setUserData] = useState({ email: '', password: '', name: '', image: '' })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage type={'login'} setUserData={setUserData} userData={userData} />} />
                    <Route path='/cadastro' element={<HomePage type={'signIn'} setUserData={setUserData} userData={userData} />} />
                    <Route path='/habitos' element={ <HabitsPage/>} />
                    <Route path='/hoje' element={<TodayPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

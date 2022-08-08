import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import HomePage from './HomePage';
import HabitsPage from './HabitsPage'
import TodayPage from './TodayPage';
import HistoryPage from './HistoryPage';
import { UserContext } from './context';

export default function App() {
    const [userData, setUserData] = useState({ email: '', password: '', name: '', image: '' })
    const [progressPercentage, setProgressPercentage] = useState()
    console.log(progressPercentage)

    return (
        <>
        <UserContext.Provider value={{setProgressPercentage, progressPercentage}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage type={'login'} setUserData={setUserData} userData={userData} />} />
                    <Route path='/cadastro' element={<HomePage type={'signIn'} setUserData={setUserData} userData={userData} />} />
                    <Route path='/habitos' element={ <HabitsPage/>} />
                    <Route path='/hoje' element={<TodayPage/>}/>
                    <Route path='/historico' element={<HistoryPage/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>
    )
}

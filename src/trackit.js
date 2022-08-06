import axios from 'axios';
import { useEffect } from 'react';

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('userData')}` }
}

const ACCOUNT_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/'
const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'

function signUp(userData) {
    const promise = axios.post(`${ACCOUNT_URL}sign-up`, userData)
    console.log(userData)
    return promise
}
function login(loginData) {
    const promise = axios.post(`${ACCOUNT_URL}login`, loginData)
    console.log(loginData)
    console.log(promise)
    return promise
}

function createHabit(habit) {
    const promise = axios.post(BASE_URL, habit, config);
    return promise
}

function getHabits() {
        const requisition = axios.get(BASE_URL, config)
        return requisition
}

function deleteHabit(habitId) {
    const promise = axios.delete(`${BASE_URL}${habitId}`, config)
    return promise
}

function getTodayHabits() {
    const requisition = axios.get(`${BASE_URL}today`, config)
    return requisition
}

export { signUp, login, getHabits, createHabit, deleteHabit, getTodayHabits }
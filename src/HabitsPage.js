import styled from 'styled-components'
import Header from './Header'
import Habits from './Habits'
import Footer from './Footer'

export default function HabitsPage() {
    if (localStorage.getItem('userData')) {

        return (
            <PageWrappler>
                <Header />
                <Habits>

                </Habits>
                <Footer />
            </PageWrappler>
        )
    }
    else {
        return (
            <h1>Para ter acesso a essa parte, faça o login primeiro.</h1>
        )
    }
}

const PageWrappler = styled.div`
background-color: #E5E5E5;
box-sizing: border-box;
padding-top: 98px;
min-height: 100vh;
`

export {PageWrappler}
import styled from 'styled-components'
import Header from './Header'
import Habits from './Habits'

export default function HabitsPage() {
    return (
        <PageWrappler>
            <Header />
            <Habits>

            </Habits>
        </PageWrappler>
    )
}

const PageWrappler = styled.div`
background-color: #E5E5E5;
box-sizing: border-box;
padding-top: 98px;
min-height: 100vh;
`


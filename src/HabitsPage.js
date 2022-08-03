import styled from 'styled-components'
import Header from './Header'
import UserHabits from './UserHabits'

export default function HabitsPage() {
    return (
        <PageWrappler>
            <Header />
            <UserHabits>
                
            </UserHabits>
        </PageWrappler>
    )
}

const PageWrappler = styled.div`
background-color: #E5E5E5;
`


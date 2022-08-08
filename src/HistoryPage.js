import { HabitsHeader } from "./Habits"
import { PageWrappler } from "./HabitsPage"
import Header from "./Header"
import Footer from "./Footer"

export default function HistoryPage() {
    return (
        <PageWrappler>
            <Header />
            <HabitsHeader>
                <h1>Histórico</h1>
            </HabitsHeader>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
<Footer/>
        </PageWrappler>

    )
}
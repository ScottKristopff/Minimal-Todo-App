import { Container, Box } from '@material-ui/core'
import { TodoCard } from './TodoCard'
function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Box mt={10}>
                    <TodoCard />
                </Box>
            </Container>
        </div>
    )
}

export default App
